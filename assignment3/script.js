// Getting artwork information elements
const info = document.getElementById("info");
const artName = document.getElementById("artName");
const artYear = document.getElementById("artYear");
const artDesc = document.getElementById("artDesc");
const closeBtn = document.getElementById("closeBtn");

// Showing info card with description
function showInfo(name, year, artist) {
  artName.textContent = name; // Setting title
  artYear.textContent = year; // Setting year
  artDesc.textContent = artist; // Setting artist
  info.style.display = "flex"; // Making information card visible
}

// Click events for each artwork with information data
document.getElementById("art1").addEventListener("click", () => {
  showInfo("Blue eyes (Les yeux bleus)", "1956", "Françoise GILOT");
});

document.getElementById("art2").addEventListener("click", () => {
  showInfo(
    "Boulevard Montmartre, morning, cloudy weather (Boulevard Montmartre, matin, temps gris)",
    "1897",
    "Camille PISSARRO"
  );
});

document.getElementById("art3").addEventListener("click", () => {
  showInfo("The Banquet of Cleopatra", "(1743-1744)", "Giambattista TIEPOLO");
});

// Closes info card if you click close button
closeBtn.addEventListener("click", () => {
  info.style.display = "none"; // sets invisible
});

// Closes info card if you click anywhere outside the card
window.addEventListener("click", (e) => {
  if (e.target === info) {
    info.style.display = "none";
  }
});
