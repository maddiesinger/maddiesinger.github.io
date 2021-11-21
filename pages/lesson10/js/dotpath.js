//WHat is the path to current temp using dot notation
//preston id
let cityID = 5604473;
const apiKey = 'e8d03de824b27f45a48404fccb7de49a';
const prestonAPI = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${apiKey}`;

fetch(prestonAPI)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok');
    })
    .then(function (jsonObject) {
        console.log(jsonObject);
    
    
        document.querySelector('#temp').innerHTML = jsonObject.main.temp + '&deg;F';

        let iconPath = 'https://openweathermap.org/img/w/'+jsonObject.weather[0].icon+'.png';
        icon = document.querySelector('#img').innerHTML = 'Image Icon Path: ' + iconPath + '<img src="' + iconPath + '"alt="current weather icon">';
})
.catch(function (error) {
    console.log('Fecth error: ', error.message);
})



//const prestonPath = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${apiKey}`;
 
//getCityWeather(cityID);
//getCityForecast(cityID);

//Math.round(data.list[0].main.temp) + '&deg;F';

//Fish Haven
//const fishHavenPath = `https://api.openweathermap.org/data/2.5/weather?lat=42&lon=111&units=imperial&appid=${apiKey}`;
 
