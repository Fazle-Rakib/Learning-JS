const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

// console.log(triggers);
function highlightLink(){
    // console.log(this);
    const linkCords = this.getBoundingClientRect();
    console.log(linkCords,window.scrollX,window.scrollY);
    const coords = {
        width: linkCords.width,
        height: linkCords.height,
        left: linkCords.left + window.scrollX,
        top: linkCords.top + window.scrollY
    }
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
}
triggers.forEach((t)=> t.addEventListener('mouseenter',highlightLink))