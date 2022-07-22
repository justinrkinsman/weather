/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
fetch('https://api.openweathermap.org/data/2.5/weather?q=Halifax&APPID=da9add490059445074b78ded2c4fa995', {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        console.log(response)
        console.log(response.name + ", " + response.sys.country)
        console.log(`Current Temp: ${response.main.temp - 273.15}`)
    })
/******/ })()
;
//# sourceMappingURL=main.js.map