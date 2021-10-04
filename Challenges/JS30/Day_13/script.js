function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}


// Window events
const sliderImage = document.querySelectorAll('.slide-in');
window.addEventListener('scroll',debounce(slider,100));

function slider(e){
    sliderImage.forEach((image)=>{
        // half-way through the image
        const slideInAt = window.scrollY+window.innerHeight - (image.height/2);
        // console.log(window.scrollY+window.innerHeight,slideInAt,image.offsetTop);
        //Bottom of the image
        const imageBottom = image.offsetTop+ image.height;
        const isHalfShown = slideInAt > image.offsetTop;
        const isBottomPassed = window.scrollY > imageBottom;
        console.log(slideInAt,window.scrollY);
        console.log('active',isHalfShown,isBottomPassed);
        if(isHalfShown && !isBottomPassed)
        {
            image.classList.add('active');
        }
        else
        {
          image.classList.remove('active');
        }

        // console.dir(image);
    })
}