// Calback 
const doSomething = (callback) =>{
    setTimeout(()=>{
        const skills = ['HTML','CSS','JS'];
        callback(new Error('this is an eror'),skills);
        // callback(false,skills);
    },2000)
}

const doOtherThing = ()=>{
    setTimeout(()=>{
        // throw new Error('this is an eror');
        console.log('Here I am!');
    },2000)
}

const callback = (err,result)=>{
    if(err)
    {
        console.log(err);
    }
    else console.log(result);
}

doSomething(callback);
doOtherThing();


// Promise
const doPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const skills = ['HTML','CSS','JS'];
        if(skills.indexOf('HTML') !== -1 || skills.includes('Node'))
        {
            resolve(skills);
        }
        else
        {
            reject('Something went wrong');
        }
    },4000)
})

doPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});


//Fetch API using promises
const url = 'https://api.thecatapi.com/v1/breeds' // countries api
fetch(url)
    .then((response)=>{
        console.log(response); // Whole response with description
        console.log(response.json().then(data => console.log(data))); // the data is shown
}).then((data)=>{
        console.log('Here',data); //undefined for the given link
    })
    .catch((error)=>{
    console.log(error);
})

// async and await
const asyncSquare = async function(n){
    return  n*n;
}
const value =  asyncSquare(5);
console.log(value);
// console.log(asyncSquare(2));
// asyncSquare(3)
//     .then((result)=> console.log(result))
//     .catch((e) => console.log(error));

// const url = 'https://api.thecatapi.com/v1/breeds' // countries api

const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.log(err)
    }
}
console.log('===== async and await')
fetchData()
  
