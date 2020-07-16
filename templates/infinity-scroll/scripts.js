const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = 'cruZ_r6yEZ3Se3XnlbbcwG3DTJ2SvhG-eXT-6z3sz8Q';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {

}
// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const photosArray = await response.json();
        console.log(photosArray);
        displayPhotos();
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();