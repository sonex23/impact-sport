const api_key = "db8a26b5d9654afeb8f780ccf63d59e3";

// default show clubs
fetch('https://api.football-data.org/v2/competitions/PL/teams', {
    headers: {
        'X-Auth-Token': api_key
    }
}) .then(response => response.json())
    .then(data => {
        console.log(data.teams)
        const teams = data.teams
        let detail = ""
        teams.forEach(i => detail += tarikData(i));
        const modalContainer = document.querySelector(".list-club-container")
        modalContainer.innerHTML = detail
    
    })

// event if premier league button on click
const premierLeagueButton = document.querySelector('.premier-league-button');
premierLeagueButton.addEventListener('click', function() {

changeButtonFormatPremierLeague(); // change format button

fetch('https://api.football-data.org/v2/competitions/PL/teams', {
    headers: {
        'X-Auth-Token': api_key
    }
    }).then(response => response.json())
    .then(data => {
        console.log(data.teams)
        const teams = data.teams
        let detail = ""
        teams.forEach(i => detail += tarikData(i));
        const modalContainer = document.querySelector(".list-club-container")
        modalContainer.innerHTML = detail
})
})

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
    .then(data => {
        console.log(data.teams)
        const teams = data.teams
        let detail = ""
        teams.forEach(i => detail += tarikData(i));
        const modalContainer = document.querySelector(".list-club-container")
        modalContainer.innerHTML = detail
});
})

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
    .then(data => {
        console.log(data.teams)
        const teams = data.teams
        let detail = ""
        teams.forEach(i => detail += tarikData(i));
        const modalContainer = document.querySelector(".list-club-container")
        modalContainer.innerHTML = detail
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
    .then(data => {
        console.log(data.teams)
        const teams = data.teams
        let detail = ""
        teams.forEach(i => detail += tarikData(i));
        const modalContainer = document.querySelector(".list-club-container")
        modalContainer.innerHTML = detail
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
    .then(data => {
        console.log(data.teams)
        const teams = data.teams
        let detail = ""
        teams.forEach(i => detail += tarikData(i));
        const modalContainer = document.querySelector(".list-club-container")
        modalContainer.innerHTML = detail
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


function tarikData(m){
    return `<div class="list-club">
    <button type="button" class="btn image" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><img src="${m.crestUrl}" alt="Liverpool">
    <p>${m.name}</p>
 </button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">${m.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <ul>
            <li>Name: ${m.name}</li>
            <li>Short Name: ${m.shortName}</li>
            <li>Address: ${m.address}</li>
            <li>Founded: ${m.founded}</li>
            <li>Address: ${m.address}</li>
            <li>Venue: ${m.venue}</li>
            <li>Website: ${m.website}</li>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    </div>
    </div>
</div>
</div>`

}