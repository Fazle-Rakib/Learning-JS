const url = 'http://api.worldbank.org/v2/country/br?format=json';
fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));

const fetchData = async () => {
    try{
        const response = await fetch(url);
        const realData = await response.json();
        console.log(realData);
    }catch(error){
        console.log(error)
    }
}

fetchData();