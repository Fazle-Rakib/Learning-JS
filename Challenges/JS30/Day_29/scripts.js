let countdown;
const timeDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds)
{
    //clear any existing timer
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds*1000;
    displaTimeLeft(seconds);
    displayEndTime(then);
    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then-Date.now())/1000);
        if( secondsLeft < 0)
        {
            //Clear the setInterval()
            clearInterval(countdown);
            return;
        }
        // console.log(secondsLeft);
        displaTimeLeft(secondsLeft);
    },1000)
}

function displaTimeLeft(seconds)
{
    const minutes = Math.floor(seconds/60);
    const secondsLeft = seconds%60;
    //Formatting data as wanted 
    const display = `${minutes}:${secondsLeft < 10 ? '0' : '' }${secondsLeft}`;
    timeDisplay.textContent = display;
    document.title = display;
    console.log({minutes,secondsLeft});
}

function displayEndTime(timestamp){
    //Get Real Timestamp from seconds
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hours} : ${minutes < 10 ? '0' : ''}${minutes}`
}

function startTime(){
    //Fetching data from data-time
    console.log(this.dataset.time);
    const seconds = this.dataset.time;
    timer(seconds);
}

buttons.forEach(button => {
    button.addEventListener('click',startTime);
});

function getTime(e){
    //Prevent reloading after form submit
    e.preventDefault();
    const seconds = parseInt(this.minutes.value)*60;
    timer(seconds);
    this.reset();

}

//can find a element by name field
document.customForm.addEventListener('submit',getTime);