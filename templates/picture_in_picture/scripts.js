console.log("picture in picture start..");

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
// Предложить выбрать медиапоток, перейти к элементу видео, затем воспроизвести
async function selectMediaStream() {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
        videoElement.play();
      };
    } catch (error) {
      // Catch Error Here
      console.log("Error! Here: ", error)
    }
  }

  // On Load
selectMediaStream();