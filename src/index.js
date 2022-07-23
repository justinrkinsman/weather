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
        if (response.weather[0].main === 'Clouds'){
            document.body.classList.toggle('clouds')
        }else if (response.weather[0].main === 'Clear'){
            document.body.classList.toggle('clear')
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
        document.getElementById('feelsLike').textContent = `Feels Like: ${response.main.feels_like - 273.15} \u00b0 C`
        document.getElementById('currentWeather').textContent = `Current Weather Conditions: ${response.weather[0].main}`
        document.getElementById('sunrise').textContent = `Sunrise Time: ${new Date(response.sys.sunrise*1000)}`
        document.getElementById('sunset').textContent = `Sunset Time: ${new Date(response.sys.sunset*1000)}`
        console.log(response.weather[0].icon)
        console.log(response.weather[0].id)
        img.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
        if (response.weather[0].main === 'Clouds'){
            document.body.classList.toggle('clouds')
        }else if (response.weather[0].main === 'Clear'){
            document.body.classList.toggle('clear')
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