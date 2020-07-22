console.log("picture in picture start..");

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
// Предложить выбрать медиапоток, перейти к элементу видео, затем воспроизвести
async function selectMediaStream() {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      console.log(videoElement);
      console.log(mediaStream);
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
        videoElement.play();
      };
    } catch (error) {
      // Catch Error Here
      console.log("Error! Here: ", error)
    }
  }

  button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
  });

  // On Load
selectMediaStream();