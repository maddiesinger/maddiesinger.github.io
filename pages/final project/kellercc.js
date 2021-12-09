//-----------JS for all pages-------
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat="


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

        document.querySelector('div.direct-cards').appendChild(card);
  }
})
  .catch(function(error){
   console.log('Fetch error: ', error.message);
})

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