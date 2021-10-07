const divs = document.querySelectorAll('div');
const button = document.querySelector('button')

function logDiv(e){
    console.log('clicked!!!')
    console.log(this.classList.value);

    // Stop bubbling 
    // capture : false | if we click three it will only ran once(3) and stop bubbling(3-X->2-X->1)
    // capture : true | if we click three it will only ran once(1) and stop capturing(1-X->2-X->3)
    // e.stopPropagation();
}

// console.dir( divs)
// document.body.addEventListener('click',logDiv)

// If you click innermost div first
// the capturing(one --> two --> three) : by default it is [false]
// then the bubbling(three --> two --> one) happens
divs.forEach((div)=>{
    div.addEventListener('click',logDiv,{
        capture:false,
        once : true
    });
})

//  once means | unbinding itself 
//  it will listen to one click only then unbind itself from no future click
// div.removeEventListener('click',logDiv);

button.addEventListener('click',logDiv,{
    once:true
})