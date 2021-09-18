// Level 1
// Case 1
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
console.table(countries);
  
// Case 2
const countriesObj = {countries};
console.table(countriesObj);

// Case 3
console.group('Countries');
console.log(countries);
console.groupEnd();

// Level 2
// Case 1
console.assert(10>2*10,'This assertion is wrong');

// Case 2
console.warn('Warning Message');

// Case 3
console.error('Error Msg');

// Level 3
// Case 1
console.time('i ');
for(let i= 0;i<countries.length;i++)
{
    console.log(countries[i][0],countries[i][1]);
}
console.timeEnd('i ');

console.time('of ');
for(const each of countries)
{
    console.log(each[0],each[1]);
}
console.timeEnd('of ');

console.time('forEach ');
countries.forEach((each)=>{
    console.log(each[0],each[1]);
})
console.timeEnd('forEach ');

