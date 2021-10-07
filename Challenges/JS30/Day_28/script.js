const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

// console.dir(speed,bar,video);

function handleMove(e){
        const barHeight = e.pageY - this.offsetTop
        const percent = (barHeight/this.offsetHeight);
        const height = Math.round(percent * 100) + '%';
        const min = 0.4;
        const max = 4;
        const playbackRate = percent *(max-min)+min;
        bar.style.height = height;
        bar.textContent = playbackRate.toFixed(2)+'x';
        // console.log(percent);
        video.playbackRate = playbackRate;
        // console.log(barHeight,this.offsetTop)
}
speed.addEventListener('mousemove',handleMove)