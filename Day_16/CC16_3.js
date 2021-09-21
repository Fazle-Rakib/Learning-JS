import {txt} from './resources.js';
const txtToObj = JSON.parse(txt,undefined,4);
console.log(txtToObj);


//There are some issues solving this problem...
const txtObj = JSON.parse(txt,(key,value)=>{
    // if(key == 'skills' && value.length > 3)
    // {
    //     console.log(key,value,value.length);
    // }
    let txtChecker = (key == 'skills' && value.length > 3) ?value : value;
    return txtChecker;
})
console.log(txtObj);