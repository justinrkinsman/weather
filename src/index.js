let converter = document.getElementById('converter')
let city = document.getElementById('city')
let submit = document.getElementById('btn')

window.addEventListener('load', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bathurst,CA&APPID=da9add490059445074b78ded2c4fa995`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        console.log(response)
        document.getElementById("cityName").textContent = response.name + ", " + response.sys.country
        document.getElementById("currentTemp").textContent = `Current Temp: ${response.main.temp - 273.15} \u00b0 C`
        document.getElementById('feelsLike').textContent = `Feels Like: ${response.main.feels_like - 273.15} \u00b0 C`
        document.getElementById('currentWeather').textContent = `Current Weather Conditions: ${response.weather[0].main}`
        document.getElementById('sunrise').textContent = `Sunrise Time: ${new Date(response.sys.sunrise*1000)}`
        document.getElementById('sunset').textContent = `Sunset Time: ${new Date(response.sys.sunset*1000)}`
        console.log(response.weather[0].icon)
        console.log(response.weather[0].id)
        img.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
        if (response.weather[0].main === 'Clouds' || response.weather[0].main === "Rain" || 
        response.weather[0].main === "Drizzle" || response.weather[0].main === "Thunderstorm" || 
        response.weather[0].main === "Mist" || response.weather[0].main === "Smoke" || 
        response.weather[0].main === "Haze" || response.weather[0].main === "Dust" ||
        response.weather[0].main === "Fog" || response.weather[0].main === "Ash" ||
        response.weather[0].main === "Squall" || response.weather[0].main === "Tornado"){
            document.body.classList = ""
            document.body.classList.add('weather-clouds')
            converter.classList = ""
            converter.classList = 'weather-clouds-btn'
            city.classList = ""
            city.classList = 'weather-clouds-input'
            submit.classList = ''
            submit.classList = 'weather-clouds-btn'
        }else if (response.weather[0].main === 'Clear'){
            document.body.classList = ""
            document.body.classList = 'weather-clear'
            converter.classList = ""
            converter.classList = 'weather-clear-btn'
            city.classList = ""
            city.classList = 'weather-clear-input'
            submit.classList = ''
            submit.classList = 'weather-clear-btn'
        }else if (response.weather[0].main === 'Snow'){
            document.body.classList = ""
            document.body.classList = 'weather-snow'
            converter.classList = ""
            converter.classList = 'weather-snow-btn'
            city.classList = ""
            city.classList = 'weather-snow-input'
            submit.classList = ''
            submit.classList = 'weather-snow-btn'
        }else if (response.weather[0].main === 'Sand'){
            document.body.classList = ""
            document.body.classList.add('weather-sand')
            converter.classList = ""
            converter.classList = 'weather-sand-btn'
            city.classList = ""
            city.classList = 'weather-sand-input'
            submit.classList = ''
            submit.classList = 'weather-sand-btn'
        }
    /*    fetch(`http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`, {mode: 'cors'})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    img.src = response.weather[0].icon
})*/
})
})

let img = document.getElementById('image')

document.getElementById('btn').addEventListener('click', () => {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=da9add490059445074b78ded2c4fa995`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        document.getElementById("cityName").textContent = response.name + ", " + response.sys.country
        document.getElementById("currentTemp").textContent = `Current Temp: ${response.main.temp - 273.15} \u00b0 C`
        document.getElementById('feelsLike').textContent = `Feels Like: ${response.main.feels_like - 273.15} \u00b0 C`
        document.getElementById('currentWeather').textContent = `Current Weather Conditions: ${response.weather[0].main}`
        document.getElementById('sunrise').textContent = `Sunrise Time: ${new Date(response.sys.sunrise*1000)}`
        document.getElementById('sunset').textContent = `Sunset Time: ${new Date(response.sys.sunset*1000)}`
        console.log(response.weather[0].icon)
        console.log(response.weather[0].id)
        img.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
        document.body.classList = ""
        if (response.weather[0].main === 'Clouds' || response.weather[0].main === "Rain" || 
        response.weather[0].main === "Drizzle" || response.weather[0].main === "Thunderstorm" || 
        response.weather[0].main === "Mist" || response.weather[0].main === "Smoke" || 
        response.weather[0].main === "Haze" || response.weather[0].main === "Dust" ||
        response.weather[0].main === "Fog" || response.weather[0].main === "Ash" ||
        response.weather[0].main === "Squall" || response.weather[0].main === "Tornado"){
            document.body.classList = ""
            document.body.classList.add('weather-clouds')
            converter.classList = ""
            converter.classList = 'weather-clouds-btn'
            city.classList = ""
            city.classList = 'weather-clouds-input'
            submit.classList = ''
            submit.classList = 'weather-cloud-btn'
        }else if (response.weather[0].main === 'Clear'){
            document.body.classList = ""
            document.body.classList.add('weather-clear')
            converter.classList = ""
            converter.classList = 'weather-clear-btn'
            city.classList = ""
            city.classList = 'weather-clear-input'
            submit.classList = ''
            submit.classList = 'weather-clear-btn'
        }else if (response.weather[0].main === 'Snow'){
            document.body.classList = ""
            document.body.classList.add('weather-snow')
            converter.classList = ""
            converter.classList = 'weather-snow-btn'
            city.classList = ""
            city.classList = 'weather-snow-input'
            submit.classList = ''
            submit.classList = 'weather-snow-btn'
        }else if (response.weather[0].main === 'Sand'){
            document.body.classList = ""
            document.body.classList = 'weather-sand'
            converter.classList = ""
            converter.classList = 'weather-sand-btn'
            city.classList = ""
            city.classList = 'weather-sand-input'
            submit.classList = ''
            submit.classList = 'weather-sand-btn'
        }
    /*    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=T9MZvkuHdTIWdpKEiUvT8fur5A2JESV1&s=${response.weather[0].main}`, {mode: 'cors'})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    img.src = response.data.images.original.url
})*/
})
})

document.getElementById('converter').addEventListener('click', () => {
    let converter = document.getElementById('converter')
    if (converter.textContent === 'Fahrenheit'){
        
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=da9add490059445074b78ded2c4fa995`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        document.getElementById("currentTemp").textContent = `Current Temp: ${1.8*(response.main.temp-273) + 32} \u00b0 F`
        document.getElementById('feelsLike').textContent = `Feels Like: ${1.8*(response.main.feels_like-273)+32} \u00b0 F`
    })
    converter.textContent = 'Celsius'
}else if (converter.textContent === 'Celsius'){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=da9add490059445074b78ded2c4fa995`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        document.getElementById("currentTemp").textContent = `Current Temp: ${response.main.temp - 273.15} \u00b0 C`
        document.getElementById('feelsLike').textContent = `Feels Like: ${response.main.feels_like - 273.15} \u00b0 C`
    })
    converter.textContent = 'Fahrenheit'
}
})