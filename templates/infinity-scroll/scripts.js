// Unsplash API
const count = 30;
const apiKey = 'cruZ_r6yEZ3Se3XnlbbcwG3DTJ2SvhG-eXT-6z3sz8Q';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();