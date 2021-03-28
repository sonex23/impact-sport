//button-side-matches
const getButtonMatches = document.querySelectorAll('.matches')
console.log(getButtonMatches);
getButtonMatches.forEach(button => {
    button.addEventListener('click', function () {
        getButtonMatches.forEach(btn => {
            btn.classList.remove('aktif')
        })
        button.classList.add('aktif')

        switch (button.classList[2]) {
            case 'PL':
                return getMatches(button.classList[2])
            case 'BL1':
                return getMatches(button.classList[2])
            case 'PD':
                return getMatches(button.classList[2])
            case 'FL1':
                return getMatches(button.classList[2])
            case 'SA':
                return getMatches(button.classList[2])
            default:
                break

        }
    })
})

//fetchmatches
function getMatches(league) {
    fetch(`https://api.football-data.org/v2/competitions/${league}/matches?dateFrom=2021-03-28&&dateTo=2021-04-03`, {
            headers: {
                'X-Auth-Token': '7c14ac2a3da541d6a79a96f0601c9868'
            }
        }).then(res => res.json())

        .then(res => {
            const matches = res.matches
            let card = '';
            matches.map(match => {
                console.log(match);
                card += showMatches(match)
            })
            const matchesList = document.querySelector('.matches-list-container')
            matchesList.innerHTML = card
        })
}

getMatches('PL')

function showMatches(data) {
    return (
        `
        <div class="list-matches">
        <div class="score-matches">
            <div class="home-score">
                <div class="img-score">
                    <p class="club-name">${data.homeTeam.name}</p>
                </div>
                <p class="score-number">${data.score.fullTime.homeTeam === null ? '0' : data.score.fullTime.homeTeam}</p>
            </div>
            <div class="vs">VS</div>
            <div class="away-score">
                <div class="img-score">
                    <p class="club-name">${data.awayTeam.name}</p>
                </div>
                <p class="score-number">${data.score.fullTime.awayTeam === null ? '0' : data.score.fullTime.awayTeam}</p>
            </div>
        </div>
        <div class="time-matches">
            <p>${data.utcDate}</p>
        </div>
    </div>
        `
    )
}