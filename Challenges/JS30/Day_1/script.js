function playingSound(event){
    // console.log(event.keyCode);
    const sound = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
    if(sound == null) return;
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
}

function removeTransition(event){
    if(event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

//Listening to keydown event & playing sound
window.addEventListener('keydown',playingSound);

// If a key has an event ocuured then it will remove the transformation
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend',removeTransition);
})

