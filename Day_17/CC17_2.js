// Case 1
const selfInfo = {
    firstName: 'Hasnat',
    lastName: 'Alam',
    age: 20,
    country: 'US',
    skills:['HTML','CSS','JS'],
    city: 'New-York'
}
const selfInfoJson = JSON.stringify(selfInfo,undefined,4);
// console.log(selfInfoJson);
localStorage.setItem('Personal Info',selfInfoJson);
console.log(localStorage);
console.log(JSON.parse(localStorage.getItem('Personal Info')));