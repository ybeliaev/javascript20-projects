console.log("work");

const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
      name: 'music-1',
      displayName: 'Dangerous',
      artist: 'Depeche Mode',
    },
    {
      name: 'music-2',
      displayName: 'Happiest girl',
      artist: 'Depeche Mode',
    },
    {
      name: 'music-3',
      displayName: 'Ordinary world',
      artist: 'Duran-Duran',
    },
    {
      name: 'metric-1',
      displayName: 'Front Row (Remix)',
      artist: 'Metric/Jacinto Design',
    },
  ];
  // Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}
// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// Current song
let songIndex = 0;

// Previous Song
function prevSong(){
  songIndex--;
  if(songIndex < 0){
    songIndex = songs.length - 1
  }
  loadSong(songs[songIndex])
  playSong()
}
//Next Song
function nextSong(){
  songIndex++;
  if(songIndex > songs.length - 1){
    songIndex = 0
  }
  loadSong(songs[songIndex])
  playSong()
}

// Update Progress Bar & Time
function updateProgressBar(e){
  if(isPlaying){
    let {duration, currentTime} = e.srcElement; 
    // Update progress bar width
    let progressPercent = (currentTime / duration) * 100;      
    progress.style.width = `${progressPercent}%`;
    //Calculate duration
    let durationMinutes = Math.floor(duration / 60);
    if (durationMinutes < 10) {
      durationMinutes = `0${durationMinutes}`;
    }
    let durationSeconds = Math.floor(duration % 60);
    if(durationSeconds < 10){
      durationSeconds = `0${durationSeconds}`;
    }    
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    //Calculate for current
    let currentMinutes = Math.floor(currentTime / 60);    
    if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
    }
    let currentSeconds = Math.floor(currentTime % 60);
    if(currentSeconds < 10){
      currentSeconds = `0${currentSeconds}`;
    } 
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    
  }  
}
// Set Progress Bar
function setProgressBar(e) {
  let width = this.clientWidth;
  let clickX = e.offsetX;
  let {duration} = music;
  music.currentTime = (clickX/width) * duration;
}

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar)