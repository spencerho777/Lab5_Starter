// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const dropdown = document.getElementById("voice-select");
  
  function loadVoices() {
    let voices = speechSynthesis.getVoices();
    for (let voice of voices) { 
      let option = document.createElement("option");
      option.textContent = voice.name + " " + voice.lang;
  
      option.setAttribute("voice-name", voice.name);
      option.setAttribute("voice-lang", voice.lang);
      dropdown.appendChild(option);
    }
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  const textArea = document.getElementById("text-to-speak");
  const faceImg = document.querySelector("img");
  const talkButton = document.querySelector("button");

  talkButton.addEventListener("click", function() {
    let speech = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = dropdown.selectedOptions[0].getAttribute("voice-name");
    
    for (let voice of speechSynthesis.getVoices()) {
      if (voice.name === selectedOption) {
        speech.voice = voice;
        break;
      }
    }

    speech.onstart = () => {
      faceImg.src = "./assets/images/smiling-open.png";
    };
    speech.onend = () => {
      faceImg.src = "./assets/images/smiling.png";
    };
  
    speechSynthesis.speak(speech);
  
  });
}

