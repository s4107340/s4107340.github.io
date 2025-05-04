const audio = document.querySelector("#custom-media-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
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
const playlist = [
  { name: "One", link: "media/song1.mp3" },
  { name: "Two", link: "media/song2.mp3" },
  { name: "Three", link: "media/song3.mp3" },
  { name: "Four", link: "media/song4.mp3" },
];

function playSong(no) {
  audio.pause();
  audio.src = playlist[no].link;
  songName.textContent = playlist[no].name;
  audio.load();
  audio.play();
}

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

const sliders = document.querySelectorAll(".controls__slider");

function scrub(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * audio.duration;
  audio.currentTime = scrubTime;
}

progressBar.addEventListener("click", scrub);
let mousedown = false;
progressBar.addEventListener("mousedown", () => (mousedown = true));
progressBar.addEventListener("mousemove", (e) => mousedown && scrub(e));
progressBar.addEventListener("mouseup", () => (mousedown = false));

function handleSliderUpdate() {
  audio[this.name] = this.value;
}

sliders.forEach((slider) => {
  slider.addEventListener("change", handleSliderUpdate);
});

const songName = document.querySelector("#song-name");
const songPhoto = document.querySelector("#song-photo");
