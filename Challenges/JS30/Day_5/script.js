const panels = document.querySelectorAll('.panel');
console.log(panels); 

function toggleOpen(){
    this.classList.toggle('open');
}
function showText(e){
    // console.log(e);
    if(e.propertyName.includes('flex'))
    {
    this.classList.toggle('open-active');
    }
}
panels.forEach((panel)=> panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',showText));