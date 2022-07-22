let city = document.getElementById('city')

document.getElementById('btn').addEventListener('click', () => {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=da9add490059445074b78ded2c4fa995`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response) {
        console.log(response)
        console.log(response.name + ", " + response.sys.country)
        console.log(`Current Temp: ${response.main.temp - 273.15}`)
        console.log(`Feels like: ${response.main.feels_like - 273.15}`)
        console.log(`Current Weather Conditions: ${response.weather[0].main}`)
        console.log(`Sunrise Time: ${new Date(response.sys.sunrise*1000)}`)
        console.log(`Sunset Time: ${new Date(response.sys.sunset*1000)}`)
    })
})