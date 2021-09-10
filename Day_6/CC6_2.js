// Case 1
let num = Math.ceil(Math.random()*10)%10;
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3"];
str = "Random : ";
for(let  i =0;i<=num;i++)
{
    str+= alphabet[(Math.floor(Math.random()*100) % 30)];
}
console.log(str);

// Case 2
alphabet = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"]
str = "Random : #";
for(let  i =0;i<6;i++)
{
    str+= alphabet[(Math.floor(Math.random()*100) % alphabet.length)];
}
console.log(str);
// Case 3
str = "Random : rgb ";
for(let  i =0;i<=2;i++)
{
    str+= (Math.ceil(Math.random()*100)%256).toString() + ', ';
}
console.log(str);

// Case 4
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
const newCountries = countries;
console.log(newCountries);  

// Case 5
let counLen =[];
for(let each of countries)
{
    counLen.push(each.length);
    // console.log(each,each.length)
}
console.log(counLen);

// Case 6
counLen.splice(0);
for(let each of countries)
{
    counLen.push(new Array(each,each.substr(0,3).toUpperCase(),each.length));
}
console.log(counLen);

// Case 7
counLen.splice(0);
for(let each of countries)
{
    if(each.includes('land'))
    {
        counLen.push(each);
    }
}
console.log(counLen);

// Case 8
counLen.splice(0);
for(let each of countries)
{
    if(each.includes('ia'))
    {
        counLen.push(each);
    }
}
console.log(counLen);

// Case 9
let maxLen = 0;
str = '';
for(let each of countries)
{
    if(each.length>maxLen)
    {
        maxLen = each.length;
        str = each;
    }
}
console.log(str);

// Case 10
counLen.splice(0);
for(let each of countries)
{
    if(each.length == 5)
    {
        counLen.push(each);
       
    }
}
console.log(counLen);

// Case 11
for(let each of webTechs)
{
    if(each.length>maxLen)
    {
        maxLen = each.length;
        str = each;
    }
}
console.log(str);
// Case 12
counLen.splice(0);
for(let each of webTechs)
{
    counLen.push(new Array(each,each.length));
}
console.log(counLen);

// Case 13
str = '';
for(let each of mernStack)
{
    str+=each.substr(0,1).toUpperCase();
}
console.log(str);

// Case 14
for(let each of webTechs)
{
    console.log(each);
}
// Case 15
const fruit = ['banana', 'orange', 'mango', 'lemon'];
const len = fruit.length;
for(i = 0;i< len/2;i++)
{
    temp = fruit[i];
    fruit[i] = fruit[len-1-i];
    fruit[len-1-i] = temp;
}
console.log(fruit);
// Case 16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
console.log(fullStack.length);
for(let i =0;i<fullStack.length;i++)
{
    temp = fullStack[i];
    for(each of temp)
    {
        console.log(each);
    }
}