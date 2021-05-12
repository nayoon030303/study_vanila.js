const weather = document.querySelector(".js-weather");
const CORDS = 'cords';
const API_KEY = 'ed220baef90b6d6b8f6af2c10839fe83';


function getWeather(lat,lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){ //fetch가 끝난 후 실행
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        console.log(temperature);
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(CORDS,JSON.stringify(coordsObj));
}

function handleGetSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log('Cant get position');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGetSuccess, handleGeoError);
}

function loadCoords(){
    const loadCoords = localStorage.getItem(CORDS);
    if(loadCoords === null){
        askForCoords();
    }else{
       const parseCoords = JSON.parse(loadCoords);
       getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();