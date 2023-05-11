// Function (animation) search
const iconSearchBtn = document.querySelector('.icon-search-btn');
const inputSearch = document.querySelector('.input-search')

iconSearchBtn.addEventListener('click', searchCity)

function searchCity() {
    let inputSearchValue = inputSearch.value;
    if (inputSearchValue == '') {
        alert('Aucune recherche')
    }else{
        animation()
    }
}

function animation() {
    inputSearch.style.width = '0';
    inputSearch.style.left = '50%';
    inputSearch.value = '';
    let searchBox = document.querySelector('.search-box');
    searchBox.style.animation = "endsearch 2s ease-in-out forwards";
    iconSearchBtn.style.display = "none"
    
}














// function search

const searchBtn = document.querySelector('.searchButton');
const searchInput = document.querySelector('.searchInput');




















// URL + KEY
//'http://api.weatherapi.com/v1/current.json?key=6c7a03f5f1274291aaf135608230505&q=London&aqi=no'

const locationInput = document.getElementById('location');




/*

async function fetchUser() {
    const r = await fetch("http://api.weatherapi.com/v1/current.json?key=6c7a03f5f1274291aaf135608230505&q=London&aqi=no",{
        method: 'GET',
        headers: {
            "Accept" : "application/json"
        }
    })
    if (r.ok === true) {
        return r.json()
    }
    throw new Error('Imposible de contacter le serveur')
}

*/


//fetchUser().then(users => console.log(users.current.temp_c))



/*
const btn = document.querySelector('.btn').addEventListener('click', checkT);
const url = "http://api.weatherapi.com/v1/forecast.json?key=6c7a03f5f1274291aaf135608230505"
const x = "bruxelles"

function checkT() {
    fetch(url + "&q=bruxelles&days=1&aqi=no&alerts=no")
    .then((resp) => resp.json())
    .then(function(data) {
        let respData = data.forecast.forecastday[0].day
        console.log(respData);
    }
    );
}

*/
