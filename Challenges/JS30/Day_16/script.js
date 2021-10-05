const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 450;
function shadow(e){
    // console.log(e.target,this);
    // console.log(hero.offsetHeight,hero.offsetWidth)
    const {offsetWidth: width,offsetHeight: height} = hero;
    let {offsetX: x, offsetY : y} = e;
    // console.log('1',x,y);
    if(this !== e.target)
    {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }
    // console.log('2',x,y);
    const xWalk = Math.round((x/width * walk) -(walk/2));
    const yWalk = Math.round((y/height * walk) -(walk/2));
    // console.log(xWalk,yWalk);
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgb(255,0,25,0.5),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgb(0,125,25,0.5),
    ${xWalk}px ${yWalk * -1}px 0 rgb(25,25,55,0.5),
    ${xWalk * -1}px ${yWalk}px 0 rgb(25,0,255,0.5)
    `;
}
hero.addEventListener('mousemove',shadow);