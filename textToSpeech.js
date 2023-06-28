let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

// document.querySelector("#talk").addEventListener("click",() => {
//     speech.text = document.querySelector("textarea").value;
// });

document.querySelector("#rate").addEventListener("input",()=>{
    // Get rate Value from the input

    const rate = document.querySelector("#rate").value;

    // set rate property of the SpeechSynthesisUtterance 

    speech.rate = rate;

    // update the rate 
    document.querySelector("#rate-label").innerHTML = rate;
});

document.querySelector("#volume").addEventListener("input",() =>{
   
    const volume = document.querySelector("#volume").value;

    speech.volume = volume;

    document.querySelector("#volume-label").innerHTML = volume;

});

document.querySelector("#pitch").addEventListener("input",() => {

    const pitch = document.querySelector("#pitch").value;

    speech.pitch = pitch;

    document.querySelector("#pitch-label").innerHTML = pitch;
});

let voices = []; //global array

window.speechSynthesis.onvoiceschanged = () =>{
    // On Voices Loaded

    voices = window.speechSynthesis.getVoices();

    speech.voice = voices[0];

    let voiceSelect = document.querySelector("#voices");
    voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option(voice.name , i)));
};

document.querySelector("#voices").addEventListener("change",()=>{
    speech.voice = voices[document.querySelector("#voices").value];
});

document.querySelector("#start").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

document.querySelector("#pause").addEventListener("click",() =>{
    window.speechSynthesis.pause();
});

document.querySelector("#resume").addEventListener("click",() => {
    window.speechSynthesis.resume();
});

document.querySelector("#cancel").addEventListener("click" , ()=>{
    window.speechSynthesis.cancel();
})