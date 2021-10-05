const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video:true,audio:false})
    .then(localMediaStream => {
        console.log(localMediaStream,typeof localMediaStream);
      
            // video.src = window.URL.createObjectURL(new Blob(localMediaStream, {type: "video"}));
            // video.src = localMediaStream;
            video.srcObject = localMediaStream;
            video.play();
            // video.paused = true;
            console.dir(video);
            // URL.revokeObjectURL();
            
    })
    .catch(error => console.log(error))
}
function pauseVideo(){ 
    video.pause();
}
function paintToCanvas(){
    const {videoWidth  : width,videoHeight: height} = video;
    canvas.width = width;
    canvas.height = height;
    return setInterval(()=>{
        ctx.drawImage(video,0,0,width,height);
    },16)
}

function takePhoto(){
    snap.currentTime = 0;
    snap.play();

    //take data out of canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download','handsome');
    // link.textContent = 'Download Image'
    link.innerHTML = `<img src = "${data}" alt = "Image"/>`
    strip.insertBefore(link,strip.firstChild);

}

getVideo();
video.addEventListener('canplay',paintToCanvas);