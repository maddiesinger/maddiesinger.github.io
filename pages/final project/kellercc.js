//-----------JS for all pages-------
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=32.9342&lon=97.2293&exclude=minutely,hourly&units=imperial&appid=e8d03de824b27f45a48404fccb7de49a"

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
      let currrentTemp = jsObject.current.temp.toFixed(0);
      let condition = jsObject.current.weather[0].main;
      let humidity = jsObject.current.humidity;

      document.querySelector('#temp').innerText = currrentTemp;
      document.querySelector('#condition').innerText = condition;
      document.querySelector('#humidity').innerText = humidity;

      let index = 1;
      let dayName = "Day";

      for(let i = 0; i < 3; i++) {
        let date = new Date(jsObject.daily[i].dt * 1000)
        let dayValue = date.getDay()
        switch(dayValue) {
          case 0: dayName = 'SUN'; break;
          case 1: dayName = 'MON'; break;
          case 2: dayName = 'TUE'; break;
          case 3: dayName = 'WED'; break;
          case 4: dayName = 'THU'; break;
          case 5: dayName = 'FRI'; break;
          case 6: dayName = 'SAT'; break;
          default: dayName = 'Error';
        }

        let dayID = 'forecast-day-' + index;
        document.getElementById(dayID).innerText = dayName;

        let tempValue = jsObject.daily[i].temp.day.toFixed(0);
        let tempID = 'forecast-temp-' + index;
        document.getElementById(tempID).innerText = tempValue + '°F'
      }
    });


//----------Directory JS-----------//
const requestURL = 'directory.json';

fetch(requestURL)
  .then(function (response) {
     if(response.ok) {
         return response.json();
     }
    throw new ERROR('Network response was not ok');
  })
  
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    for (let i = 0; i < directory.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let add = document.createElement('p');
        let web = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = directory[i].name 
        card.appendChild(h2);

        phone.textContent = directory[i].phone;
        card.appendChild(phone);

        email.textContent = directory[i].email;
        card.appendChild(email);

        add.textContent = directory[i].address;
        card.appendChild(add);

        web.textContent = directory[i].website;
        card.appendChild(web);

        image.setAttribute('src', directory[i].imageurl);
        card.appendChild(image);

        image.setAttribute('alt', directory[i].imagealt);
        card.appendChild(image);

        document.querySelector('div.direct-cards').appendChild(card);
  }
})
  .catch(function(error){
   console.log('Fetch error: ', error.message);
});


