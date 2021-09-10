const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Case 1
const newCountries = countries;
console.log(newCountries);

// Case 2
newCountries.sort();
console.log(newCountries);

// Case 3
webTechs.sort();
mernStack.sort();
console.log(webTechs,mernStack);

// Case 4
let counLen = new Array();
for(let each of countries)
{
    if(each.includes('land'))
    {
        counLen.push(each);
    }
}
console.log(counLen);
// Case 5
// Case 6
// Case 7
// Case 8
// Case 9
countries.reverse();
for(i in countries)
{
    countries[i] = countries[i].toUpperCase();
}
console.log(countries);
