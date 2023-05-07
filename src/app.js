// URL + KEY
//'http://api.weatherapi.com/v1/current.json?key=6c7a03f5f1274291aaf135608230505&q=London&aqi=no'
/*
fetch('http://api.weatherapi.com/v1/current.json?key=6c7a03f5f1274291aaf135608230505&q=London&aqi=no')
    .then(r => r.json())
    .then(body => console.log(body))
*/

/*
fetch(url + '/users')
    .then(r => r.json())
    .then(body => console.log(body))
    */

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

const btn = document.querySelector('.btn').addEventListener('click', checkT);

function checkT() {
    fetch("http://api.weatherapi.com/v1/current.json?key=6c7a03f5f1274291aaf135608230505&q=London&aqi=no")
    .then((resp) => resp.json())
    .then(function(data) {
        let x = data.current.temp_c
        console.log(x);
    }
    );
}

console.log(x + "ok");
