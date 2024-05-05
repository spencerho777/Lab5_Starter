// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  setHornPicture();
  setVolume();
  configPlayButton();
}

function setHornPicture() {
  const hornSelect = document.getElementById("horn-select");
  const audio = document.querySelector("audio");

  hornSelect.addEventListener("change", function() {
    let hornVal = hornSelect.value;
    let hornImg = document.querySelector("img");
    hornImg.src = `./assets/images/${hornVal}.svg`;
    let hornSound = `./assets/audio/${hornVal}.mp3`;
    audio.src = hornSound;
  });
}

function setVolume() {
  const volumeSlider = document.getElementById("volume");
  const volumeImg = document.querySelector("#volume-controls img")
  const audio = document.querySelector("audio");

  volumeSlider.addEventListener("input", function() {
    let vol = parseFloat(volumeSlider.value);
    let level = 0;

    if (vol >= 67) { level = 3; }
    else if (vol >= 33) { level = 2; }
    else if (vol >= 1) { level = 1; }

    audio.volume = vol / 100;
    volumeImg.src = `./assets/icons/volume-level-${level}.svg`;
  });
}

function configPlayButton() {
  const hornSelect = document.getElementById("horn-select");
  const playButton = document.getElementsByTagName("button")[0]
  const audio = document.querySelector("audio");
  const jsConfetti = new JSConfetti()

  playButton.addEventListener("click", function() {
    if (hornSelect.value == "party-horn") {
      jsConfetti.addConfetti();
    }

    audio.play();
    
  });

  

}