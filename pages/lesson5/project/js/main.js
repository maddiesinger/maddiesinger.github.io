
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

let imagesToLoad = document.querySelector("img[data-src]");

const imgOptions = {
  threshold: 0.5,
  rootmargin: "0px 0px 100px 0px"
}

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if ("IntersectionObserver" in window) { //<--- does the window support this, if so run
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) { // is it intersecting? 
        loadImages(item.target); // load the earlier function
        observer.unobserve(item.target); //tell the observer to stop after its loaded 
      }
    });
  }, imgOptions);
//a loop to tell each image to be watched
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
  //otherwise load image
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
};



function buildWC(speed, temp) {
  let wcTemp = document.getElementById('windchill');
  let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  console.log(wc);
  wc = Math.floor(wc);
  wc = (wc > temp)?temp:wc;
  console.log(wc);
  wc = wc+'°F';
  wcTemp.innerHTML = wc;
};

function copyrightYear() {
    var todaysDate = new Date();
    var currentYear = todaysDate.getFullYear();
    document.getElementById('current-date').innerText = currentYear; 
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


