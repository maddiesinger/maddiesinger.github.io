//--------preston page----------
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  let today = new Date();
let dayOfWeek; 
dayOfWeek = today.getDay();
let banner = document.querySelector('.friday');
if (dayOfWeek == 5) {
  banner.className += "pancake";
}

//--------Stormcenter Script--------
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

//------Home Page Script------

const requestURL = 'towndata.json';

fetch(requestURL)
  .then(function (response) {
     if(response.ok) {
         return response.json();
     }
    throw new ERROR('Network response was not ok');
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
    if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
      let card = document.createElement('section');
      let h1 = document.createElement('h1');
      let h2 = document.createElement('h2');
      let yf = document.createElement('p');
      let pop = document.createElement('p');
      let rf = document.createElement('p');
      //let events = document.createElement('p');
      let image = document.createElement('img');


      h1.textContent = towns[i].name;
      card.appendChild(h1);

      h2.textContent = towns[i].motto; 
      card.appendChild(h2);

      yf.textContent = 'Year Founded: ' + towns[i].yearFounded;
      card.appendChild(yf);

      pop.textContent = 'Current Popualtion: ' + towns[i].currentPopulation;
      card.appendChild(pop);

      rf.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
      card.appendChild(rf);

      //events.textContent = towns[i].events;
      //card.appendChild(events);

      image.setAttribute('src', towns[i].photo);
      card.appendChild(image);

      image.setAttribute('alt', 'This citys view');
      card.appendChild(image);
     // };
      document.querySelector('.cards').appendChild(card);
    }
           
  }
})

.catch(function(error){
 console.log('Fetch error: ', error.message);
})

//Footer script
  function copyrightYear() {
    var todaysDate = new Date();
    var currentYear = todaysDate.getFullYear();
    document.getElementById("current-date").innerText =  currentYear; 
  };

  function currentDate() {
    var todaysDate = new Date();
    const longDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var dayName = longDayNames[todaysDate.getDay()];
    const longMonthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = longMonthNames[todaysDate.getMonth()];
    document.getElementById("current-date").innerHTML = dayName + " " + todaysDate.getDate() + " " + monthName + " " +todaysDate.getFullYear();

  }

function lastSave() {
  const isoString = new Date(document.lastModified).toISOString();
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  console.log(isoString);
  const date = new Date(isoString);
  const upDate = new Intl.DateTimeFormat("en-UK", options).format(date);
  const lastMod = document.getElementById("lupdate");
  lastMod.innerText = `Last Updated: ${upDate}`;
}

window.onload = currentDate();
window.onload = copyrightYear();
window.onload = lastSave();

