
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
  banner.className += " pancake";
}


  function copyrightYear() {
    var todaysDate = new Date();
    var currentYear = todaysDate.getFullYear();
    document.getElementById("current-date").innerText = "/u00A9" + currentYear; 
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


