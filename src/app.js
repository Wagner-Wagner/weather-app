// URL & KEY = 'http://api.weatherapi.com/v1/current.json?key=6c7a03f5f1274291aaf135608230505&q=London&aqi=no'

// Function search
const searchBtn = document.querySelector('.btn-search');
const inputSearch =  document.querySelector('.input-search');
let locationName = document.querySelector('.location');
const degreDay = document.querySelector('.degre-day');
const conditionText = document.querySelector('.condition-text');
let weatherImg = document.querySelector('.weather-img');
let time =  document.querySelector('.time');
const blockImg = document.querySelectorAll('.block-img img')
//blockImg.forEach(element => console.log(element));



searchBtn.addEventListener('click', search);
function search() {
    if (inputSearch.value == "") {
        alert('Aucune ville selectione')
    }else{
        let inputSearchValue = inputSearch.value;
        locationName.textContent = inputSearchValue;
        


        fetch(`http://api.weatherapi.com/v1/current.json?key=6c7a03f5f1274291aaf135608230505&q=${inputSearchValue}&aqi=no`)
        .then((resp) => resp.json())
        .then(function(data) {
            let respData = data.current;
            degreDay.textContent = respData.temp_c
            conditionText.textContent = respData.condition.text
            weatherImg.src = respData.condition.icon
            let timeData = data.location.localtime
            time.textContent = data.location.localtime
            /*
            console.log(respData);
            console.log(timeData);
            console.log(data);
            */


            fetch(`http://api.weatherapi.com/v1/forecast.json?key=6c7a03f5f1274291aaf135608230505&q=${inputSearchValue}&days=1&aqi=no&alerts=no`)
            .then((resp) => resp.json())
            .then(function (data) {
                let dateData = data.forecast.forecastday[0].hour;
                for (let i = 6; i < dateData.length; i+=4) {
                    blockImg.forEach(element => element.src =dateData[i].condition.icon )
                
                    console.log(dateData[i]);
                    //console.log(dateData[i].condition);
                }
                
            })
        }
        );

        inputSearch.value = "";
    }

   
    
}




// URL + KEY







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
