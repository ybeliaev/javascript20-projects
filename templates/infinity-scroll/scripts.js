console.log("Начало работы")
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];


// Unsplash API
let count = 5;
const apiKey = "jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoaded() {    
    imagesLoaded++;
    console.log("image loaded: ", imagesLoaded)
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;        
        count = 25;
        apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
    }
}
// Create Elements For Links & Photos, Add to DOM
function displayPhotos(data) {
    imagesLoaded = 0;
    totalImages = photosArray.length;    
    data.forEach(photo => {
        // Create <a> to link to full photo
        const item = document.createElement("a");
        item.setAttribute("href", photo.links.html);
        item.setAttribute("target", "_blank");
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute("src", photo.urls.regular);
        img.setAttribute("alt", photo.alt_description);
        img.setAttribute("title", photo.alt_description);
        // Event Listener, check when each is finished loading
        img.addEventListener('load', imageLoaded);
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
    console.log('Create img:', img)
}


// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();        
        displayPhotos(photosArray);

    } catch (error) {
        // Catch Error Here
    }
}
// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {  
    console.log("ready: ", ready)  
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready ) {  
        console.log("ready: ", ready)  
        ready = false;  
        getPhotos();      
    }    
  });

// On Load
getPhotos();
