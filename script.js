// let speech = new SpeechSynthesisUtterance();

// let voices = [];

// let voiceSelect = document.querySelector("select");

//  window.speechSynthesis.onvoiceschanged = () => {
//         voices = window.speechSynthesis.getVoices();
//         speech.voice = voices[0];



//          voices.forEach((voice, i) => (voiceSelect.options[i] = new option(voice.
//          name, i)));

    
//   };
 


//  document.querySelector("button").addEventListener("click", () =>{
//   speech.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);

//  });


let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Function to populate voice options
function populateVoiceList() {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => {
    let option = new Option(voice.name, i);
    voiceSelect.options.add(option);
  });
}

// Event to handle voices changed
window.speechSynthesis.onvoiceschanged = () => {
  populateVoiceList();
};

// Populate voices list on page load (in case onvoiceschanged is not called)
if (window.speechSynthesis.getVoices().length > 0) {
  populateVoiceList();
}

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  speech.voice = voices[voiceSelect.value];
  window.speechSynthesis.speak(speech);
});
