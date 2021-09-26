const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const catsName = [];
const fetchData = async ()=>{
    try{
        const response = await fetch(catsAPI);
        const catsData = await response.json();
        // console.log(catsData);
        catsData.forEach(element => {
            catsName.push(element.name)
        });
        console.log(catsName);
    }catch{(error) => {
        console.log(error)}
    }
} 
fetchData();
// console.log(catsName);