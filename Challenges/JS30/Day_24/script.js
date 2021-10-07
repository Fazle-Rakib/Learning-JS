const navbar = document.querySelector('#main');
// console.log(navbar);
const topOfNav = navbar.offsetTop;
console.log(topOfNav);
function fixNavbar(){
    // console.log(window.scrollY,navbar.offsetHeight);
    // console.dir(navbar);
    if(window.scrollY >= topOfNav)
    {
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }
    else
    {
        document.body.style.paddingTop = '0px';
        document.body.classList.remove('fixed-nav');
    }
}
window.addEventListener('scroll',fixNavbar);