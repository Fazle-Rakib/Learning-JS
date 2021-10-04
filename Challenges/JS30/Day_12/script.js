const pressed = [];
const search = 'wesbos';
function responseToKey(e){
    pressed.push(e.key);
    pressed.splice(-search.length-1,pressed.length-search.length);
    // let str = 
    console.log(pressed.join(''));
    if(pressed.join('').includes(search))
    {
        console.log('Ding Ding!');
        cornify_add();
    }
}
window.addEventListener('keyup',responseToKey);
