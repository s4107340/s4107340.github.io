const audio = document.querySelector("#custom-media-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");

audio.removeAttribute("controls");
audio.addEventListener("timeupdate", updateProgressBar);

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here
// setting a playlist of 4 designated songs and giving them names that can be reffered to by now playing function
const playlist = [
  { name: "One", link: "media/song1.mp3", artist: "Artist 1" },
  { name: "Two", link: "media/song2.mp3", artist: "Artist 2" },
  { name: "Three", link: "media/song3.mp3", artist: "Artist 3" },
  { name: "Four", link: "media/song4.mp3", artist: "Artist 4" },
];

// function to give each song an index in array and play when called upon
function playSong(no) {
  audio.pause();
  audio.src = playlist[no].link;
  songName.textContent = playlist[no].name;
  audio.load();
  audio.play();
  //sets playback button to pause icon to fix issue of icon being wrong when changing song
  playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  //grabs artists name from playlist data to displaying in  now playing
  artist.textContent = playlist[no].artist;
}

//buttons for changing song ussing playlist array and function
const songOneButton = document.querySelector("#song-one-btn");
songOneButton.addEventListener("click", function playIt() {
  audio.pause();
  playSong(0);
  songPhoto.src = "media/song1.webp";
});

const songTwoButton = document.querySelector("#song-two-btn");
songTwoButton.addEventListener("click", function playIt() {
  audio.pause();
  playSong(1);
  songPhoto.src = "media/song2.webp";
});

const songThreeButton = document.querySelector("#song-three-btn");
songThreeButton.addEventListener("click", function playIt() {
  audio.pause();
  playSong(2);
  songPhoto.src = "media/song3.webp";
});

const songFourButton = document.querySelector("#song-four-btn");
songFourButton.addEventListener("click", function playIt() {
  audio.pause();
  playSong(3);
  songPhoto.src = "media/song4.webp";
});

const volumeSliders = document.querySelectorAll(".volume__slider");

// scrub bar for moving around progress bar/ timeline
//cant get to work properly/ only will let u drag innacurately
function scrub(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * audio.duration;
  audio.currentTime = scrubTime;
}

progressBar.addEventListener("click", scrub);
let mousedown = false;
progressBar.addEventListener("mousedown", () => (mousedown = true));
progressBar.addEventListener("mousemove", (e) => mousedown && scrub(e));
progressBar.addEventListener("mouseup", () => (mousedown = false));

// changes volume according to slider
function updateVolume() {
  audio[this.name] = this.value;
}

volumeSliders.forEach((volume) => {
  volume.addEventListener("change", updateVolume);
});

const songName = document.querySelector("#song-name");
const songPhoto = document.querySelector("#song-photo");
const artist = document.querySelector("#artist");

// keyboard shortcut press space to pause or play from progress
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") togglePlayPause();
});
