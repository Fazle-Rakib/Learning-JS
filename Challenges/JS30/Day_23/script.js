const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name = "text"]').value;

function populateVoices(){
    // console.log(this.getVoices());
    voices = this.getVoices();
    const generateList = voices
    .filter(voice => voice.lang.includes('en'))
    .map((each) => {
        return `<option value = "${each.name}">${each.name}  (${each.lang})</option>`
    }).join('');
    // console.log(generateList);
    voicesDropdown.innerHTML = generateList;
}

function setVoice(){
    // console.log(this.value);
    msg.voice = voices.find(voice => voice.name === this.value);
    // console.log(msg.voice);
    toogle();
    
}

function toogle(startOver  = true){
    speechSynthesis.cancel();
    if(startOver)
        speechSynthesis.speak(msg);
}

// console.log(options)
function setOption(){
    console.log(this.name,this.value);
    msg[this.name] = this.value;
    toogle();
}

speechSynthesis.addEventListener('voiceschanged',populateVoices);
voicesDropdown.addEventListener('change',setVoice);
options.forEach(option => option.addEventListener('change',setOption));
speakButton.addEventListener('click',toogle);
//Both is fine to 
stopButton.addEventListener('click',()=> toogle(false));
// stopButton.addEventListener('click',toogle.bind(null,false));