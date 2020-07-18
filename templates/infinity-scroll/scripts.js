console.log("Начало работы")
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
// let imagesLoaded = 0;
// let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = "jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
// Create Elements For Links & Photos, Add to DOM
function displayPhotos(data) {
    console.log("displayPhotos запущено");
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
        const photosArray = await response.json();        
        displayPhotos(photosArray);

    } catch (error) {
        // Catch Error Here
    }
}
// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {    
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 ) {      
      getPhotos();      
    }    
  });

// On Load
getPhotos();
