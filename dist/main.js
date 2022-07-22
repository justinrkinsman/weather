/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
window.addEventListener('load', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bathurst,CA&APPID=da9add490059445074b78ded2c4fa995`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        document.getElementById("cityName").textContent = response.name + ", " + response.sys.country
        document.getElementById("currentTemp").textContent = `Current Temp: ${response.main.temp - 273.15} \u00b0 C`
        document.getElementById('feelsLike').textContent = `Feels Like: ${response.main.feels_like - 273.15}`
        document.getElementById('currentWeather').textContent = `Current Weather Conditions: ${response.weather[0].main}`
        document.getElementById('sunrise').textContent = `Sunrise Time: ${new Date(response.sys.sunrise*1000)}`
        document.getElementById('sunset').textContent = `Sunset Time: ${new Date(response.sys.sunset*1000)}`
    /*    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=T9MZvkuHdTIWdpKEiUvT8fur5A2JESV1&s=${response.weather[0].main}`, {mode: 'cors'})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    img.src = response.data.images.original.url
})*/
})
})

let city = document.getElementById('city')
let img = document.getElementById('image')

document.getElementById('btn').addEventListener('click', () => {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=da9add490059445074b78ded2c4fa995`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        document.getElementById("cityName").textContent = response.name + ", " + response.sys.country
        document.getElementById("currentTemp").textContent = `Current Temp: ${response.main.temp - 273.15} \u00b0 C`
        document.getElementById('feelsLike').textContent = `Feels Like: ${response.main.feels_like - 273.15}`
        document.getElementById('currentWeather').textContent = `Current Weather Conditions: ${response.weather[0].main}`
        document.getElementById('sunrise').textContent = `Sunrise Time: ${new Date(response.sys.sunrise*1000)}`
        document.getElementById('sunset').textContent = `Sunset Time: ${new Date(response.sys.sunset*1000)}`
      /*  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=T9MZvkuHdTIWdpKEiUvT8fur5A2JESV1&s=${response.weather[0].main}`, {mode: 'cors'})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    img.src = response.data.images.original.url
})*/
})
})
/******/ })()
;
//# sourceMappingURL=main.js.map