const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen  = player.querySelector('[data-full]');

progressBar.style.flexBasis = '0%';

function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function updateButton(){
    const icon = this.paused ? '►' : '| |';
    toggle.textContent = icon;
}
function skipPlay(){
    // console.log(this.dataset);
    video.currentTime += parseInt(this.dataset.skip)
}
function handleRangeUpdate(){
    // console.log(this.value,this)
    video[this.name] = this.value;
}
function handleProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
    // console.log(video.duration);
    // console.log(e)
}
let direction = false;
function showFullScreen(e){
    direction = !direction;
    console.log(video.clientWidth,video.clientHeight);
    if(direction)
    {
        video.requestFullscreen();
    }
}

// Play & Pause
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
toggle.addEventListener('click',togglePlay);

//Progress Bar
let mousedown =false;
video.addEventListener('timeupdate',handleProgress);
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


//Volumn & skip button
skipButtons.forEach(button=>{
    button.addEventListener('click',skipPlay);
})
ranges.forEach(range =>{
    range.addEventListener('change',handleRangeUpdate);
})
fullScreen.addEventListener('click',showFullScreen);