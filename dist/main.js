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
    })
/******/ })()
;
//# sourceMappingURL=main.js.map