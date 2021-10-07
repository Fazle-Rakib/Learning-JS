const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');
// console.log(nav);
function handleEnter(){
    // console.log('Enter!!!')
    // console.log(this);
    this.classList.add('trigger-enter');
    setInterval(()=> this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'),150);
    
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navcoords = nav.getBoundingClientRect();
    // console.log(dropdownCoords,navcoords,dropdown,nav);

    const coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top - navcoords.top ,
        left: dropdownCoords.left -navcoords.left
    }

    // background.style.width = `${coords.width}px`;
    // background.style.height = `${coords.height}px`;
    // background.style.left = `${coords.left}px`;
    // background.style.top = `${coords.top}px`;

    background.style.setProperty('width',`${coords.width}px`);
    background.style.setProperty('height',`${coords.height}px`);
    background.style.setProperty('transform',`translate(${coords.left}px,${coords.top}px)`);



    // console.log(dropdown);

}

function handleLeave(){
    // console.log('Leave!!!')
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open')
}

triggers.forEach((block) => block.addEventListener('mouseenter',handleEnter));
triggers.forEach((block) => block.addEventListener('mouseleave',handleLeave));