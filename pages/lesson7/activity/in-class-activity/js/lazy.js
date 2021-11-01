//applies these functions to only the ones with the attribute data-src
let imagesToLoad = document.querySelectorAll("img[data-src]");
//Tells how far the image needs to be in frame to load
const imgOptions = {
  threshold: 0.1
}
//removes data src attribute
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute("data-src")); //swaps the spaths
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
//
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
}