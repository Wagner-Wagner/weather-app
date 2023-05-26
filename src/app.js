// URL & KEY = 'http://api.weatherapi.com/v1/current.json?key=6c7a03f5f1274291aaf135608230505&q=London&aqi=no'

// Function search
const searchBtn = document.querySelector('.btn-search');
const inputSearch =  document.querySelector('.input-search');
let locationName = document.querySelector('.location');
const degreDay = document.querySelector('.degre-day');
const conditionText = document.querySelector('.condition-text');
let weatherImg = document.querySelector('.weather-img');
let time =  document.querySelector('.time');




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
            degreDay.textContent = respData.temp_c+"°"
            conditionText.textContent = respData.condition.text
            weatherImg.src = respData.condition.icon
            let timeData = data.location.localtime
            time.textContent = data.location.localtime

            fetch(`http://api.weatherapi.com/v1/forecast.json?key=6c7a03f5f1274291aaf135608230505&q=${inputSearchValue}&days=1&aqi=no&alerts=no`)
            .then((resp) => resp.json())
            .then(function (data) {
                const dateData = data.forecast.forecastday[0].hour;

                for (let i = 3; i < dateData.length; i+=4){

                    const footer = document.querySelector('footer');

                    // Ajoute un DIV au footer lui ajoute une classe 
                    let newDiv = document.createElement("div"); 
                    newDiv.classList.add("block-img");
                    footer.appendChild(newDiv);

                    // Ajoute un IMG dans la nouvelle DIV
                    let newImg = document.createElement("img");
                    newImg.src = dateData[i].condition.icon;
                    newDiv.appendChild(newImg)

                    // Ajoute un P pour l'heure cherche l'heure de l API et SPLIT pour obtenir uniquement l'heure
                    let newP = document.createElement("p");
                    newDiv.appendChild(newP);
                    let completDate = dateData[i].time
                    let time = completDate.split(' ')
                    newP.textContent = time[1];

                    //Ajoute un P pour le text
                    let newPText = document.createElement("p");
                    newPText.classList.add('pText')
                    newPText.textContent = dateData[i].condition.text;
                    newDiv.appendChild(newPText);

                }

                
            })
        }
        );

        inputSearch.value = "";
    }

   
    
}

