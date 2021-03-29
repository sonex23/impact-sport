const api_key = "b864eea518104ee49de111f1d442d85e";

// default standings page
fetch('https://api.football-data.org/v2/competitions/PL/teams', {
    headers: {
        'X-Auth-Token': api_key
    }
})
.then(response => response.json())
.then(response => {
    const team = response.teams;
    let teamDetail = '';
    team.forEach(m => teamDetail += showTeam(m));
    const teamContainer = document.querySelector('.list-club-container');
    teamContainer.innerHTML = teamDetail;

    clickLogo();    
});

// event if premier league button on click
const premierLeagueButton = document.querySelector('.premier-league-button');
premierLeagueButton.addEventListener('click', function() {

    changeButtonFormatPremierLeague(); // change format button

    fetch('https://api.football-data.org/v2/competitions/PL/teams', {
        headers: {
            'X-Auth-Token': api_key
        }
    })
    .then(response => response.json())
    .then(response => {
        const team = response.teams;
        console.log(team)
        let teamDetail = '';
        team.forEach(m => teamDetail += showTeam(m));
        const teamContainer = document.querySelector('.list-club-container');
        teamContainer.innerHTML = teamDetail;
 
        clickLogo();
    });
});

// event if bundesliga button on click
const bundesligaButton = document.querySelector('.bundesliga-button');
bundesligaButton.addEventListener('click', function() {

    changeButtonFormatBundesliga();

    fetch('https://api.football-data.org/v2/competitions/BL1/teams', {
        headers: {
            'X-Auth-Token': api_key
        }
    })
    .then(response => response.json())
    .then(response => {
        const team = response.teams;
        console.log(team)
        let teamDetail = '';
        team.forEach(m => teamDetail += showTeam(m));
        const teamContainer = document.querySelector('.list-club-container');
        teamContainer.innerHTML = teamDetail;

        clickLogo();
    });
});

// event if laliga button on click
const laligaButton = document.querySelector('.laliga-button');
laligaButton.addEventListener('click', function() {

    changeButtonFormatLaliga()

    fetch('https://api.football-data.org/v2/competitions/PD/teams', {
        headers: {
            'X-Auth-Token': api_key
        }
    })
    .then(response => response.json())
    .then(response => {
        const team = response.teams;
        console.log(team)
        let teamDetail = '';
        team.forEach(m => teamDetail += showTeam(m));
        const teamContainer = document.querySelector('.list-club-container');
        teamContainer.innerHTML = teamDetail;

        clickLogo();
    });
});

// event if ligue1 button on click
const ligue1Button = document.querySelector('.ligue1-button');
ligue1Button.addEventListener('click', function() {

    changeButtonFormatLigue1();

    fetch('https://api.football-data.org/v2/competitions/FL1/teams', {
        headers: {
            'X-Auth-Token': api_key
        }
    })
    .then(response => response.json())
    .then(response => {
        const team = response.teams;
        console.log(team)
        let teamDetail = '';
        team.forEach(m => teamDetail += showTeam(m));
        const teamContainer = document.querySelector('.list-club-container');
        teamContainer.innerHTML = teamDetail;

        clickLogo();
    });
});

// event if seria-a button on click
const seriaAButton = document.querySelector('.ligaitaly-button');
seriaAButton.addEventListener('click', function() {

    changeButtonFormatSeriaA();

    fetch('https://api.football-data.org/v2/competitions/SA/teams', {
        headers: {
            'X-Auth-Token': api_key
        }
    })
    .then(response => response.json())
    .then(response => {
        const team = response.teams;
        console.log(team)
        let teamDetail = '';
        team.forEach(m => teamDetail += showTeam(m));
        const teamContainer = document.querySelector('.list-club-container');
        teamContainer.innerHTML = teamDetail;
   
        clickLogo();
    });
});

// change format button per league
function changeButtonFormatPremierLeague() {
    document.getElementById('premier-league').setAttribute("class", "side-button aktif");
    document.getElementById('bundesliga').setAttribute("class", "side-button");
    document.getElementById('laliga').setAttribute("class", "side-button");
    document.getElementById('ligue1').setAttribute("class", "side-button");
    document.getElementById('serie-a').setAttribute("class", "side-button");
}

function changeButtonFormatBundesliga() {
    document.getElementById('bundesliga').setAttribute("class", "side-button aktif");
    document.getElementById('premier-league').setAttribute("class", "side-button");
    document.getElementById('laliga').setAttribute("class", "side-button");
    document.getElementById('ligue1').setAttribute("class", "side-button");
    document.getElementById('serie-a').setAttribute("class", "side-button");
}

function changeButtonFormatLaliga() {
    document.getElementById('laliga').setAttribute("class", "side-button aktif");
    document.getElementById('bundesliga').setAttribute("class", "side-button");
    document.getElementById('premier-league').setAttribute("class", "side-button");
    document.getElementById('ligue1').setAttribute("class", "side-button");
    document.getElementById('serie-a').setAttribute("class", "side-button");
}

function changeButtonFormatLigue1() {
    document.getElementById('ligue1').setAttribute("class", "side-button aktif");
    document.getElementById('bundesliga').setAttribute("class", "side-button");
    document.getElementById('laliga').setAttribute("class", "side-button");
    document.getElementById('premier-league').setAttribute("class", "side-button");
    document.getElementById('serie-a').setAttribute("class", "side-button");
}

function changeButtonFormatSeriaA() {
    document.getElementById('serie-a').setAttribute("class", "side-button aktif");
    document.getElementById('bundesliga').setAttribute("class", "side-button");
    document.getElementById('laliga').setAttribute("class", "side-button");
    document.getElementById('ligue1').setAttribute("class", "side-button");
    document.getElementById('premier-league').setAttribute("class", "side-button");
}

// ketika logo club diklik
function clickLogo() {
    const modalDetailButton = document.querySelectorAll('.modal-detail-button');
    modalDetailButton.forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            console.log(id)
            fetch('https://api.football-data.org/v2/teams/' + id, {
                headers: {
                    'X-Auth-Token': api_key
                }
            })                            
            .then(response => response.json())
            .then(m => {
                const clubDetail = showClubDetail(m);
                console.log(clubDetail)
                const modalBody = document.querySelector('.modal-body');
                modalBody.innerHTML = clubDetail;
            });
        })
    });    
}

function showTeam(m) {
    return `<div class="list-club modal-detail-button" data-toggle="modal" data-target="#clubDetailModal" data-id="${m.id}">
        <img src="${m.crestUrl}" alt="club-logo">
        <p>${m.name}</p>
    </div>`;
};

function showClubDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.crestUrl}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.name}</h4></li>
                            <li class="list-group-item"><strong>Short Name : </strong>${m.shortName}</li>
                            <li class="list-group-item"><strong>Address : </strong>${m.address}</li>
                            <li class="list-group-item"><strong>Founded : </strong>${m.founded}</li>
                            <li class="list-group-item"><strong>Venue : </strong>${m.venue}</li>
                            <li class="list-group-item"><strong>Website : </strong><a href="${m.website}">${m.website}</a></li>
                        </ul>
                    </div>
                </div>
            </div>`;
}