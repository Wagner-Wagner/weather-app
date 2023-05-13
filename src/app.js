// Function search
const url = "http://api.weatherapi.com/v1/current.json?key= 6c7a03f5f1274291aaf135608230505&q="
const searchBtn = document.querySelector('.btn-search');
const inputSearch =  document.querySelector('.input-search');
let locationName = document.querySelector('.location');
const degreDay = document.querySelector('.degre-day');
const conditionText = document.querySelector('.condition-text')
let weatherImg = document.querySelector('.weather-img')


searchBtn.addEventListener('click', search);
function search() {
    if (inputSearch.value == "") {
        alert('Aucune ville selectione')
    }else{
        let inputSearchValue = inputSearch.value;
        locationName.textContent = inputSearchValue;


        fetch(url + inputSearchValue +"&aqi=no")
        .then((resp) => resp.json())
        .then(function(data) {
            let respData = data.current;
            console.log(respData);
            degreDay.textContent = respData.temp_c
            conditionText.textContent = respData.condition.text
            weatherImg.src = respData.condition.icon
        }
        );
      
    }
    
}




// URL + KEY
//'http://api.weatherapi.com/v1/current.json?key=6c7a03f5f1274291aaf135608230505&q=London&aqi=no'






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
