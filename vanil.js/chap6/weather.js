const CORDS = 'cords';
const API_KEY = 'ed220baef90b6d6b8f6af2c10839fe83';

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
}

function handleGeoError(){
    console.log('Cant get position');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGetSuccess, handleGeoError);
}

function loadCords(){
    const loadCords = localStorage.getItem(CORDS);
    if(loadCords === null){
        askForCoords();
    }else{
        //getWeather
    }
}

function init(){
    loadCords();
}

init();