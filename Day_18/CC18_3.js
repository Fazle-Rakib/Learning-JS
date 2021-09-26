// Case 1
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
const fetchData = async ()=>{
    const response = await fetch(catsAPI);
    const data = await response.json();
    console.log(data);
    let sum=0;
    data.forEach((element)=>{
        // const stringVal = element.weight.metric.;
        console.log();
    })
}
// fetchData();
// Case 2
// Case 3