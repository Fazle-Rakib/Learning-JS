// Case 1
const arr = new Array();
// Case 2
const arr1  = Array(1,2,3,4,5,6);
console.log(arr1);

// Case 3
console.log(arr1.length);

// Case 4
console.log(arr1[0],arr1[arr1.length/2],arr1[arr1.length-1]);

// Case 5
const mixedDataTypes = [1,'string',true,null,[
    'Name',23,'123 Breaker Street',{skills : ['HTML', 'JS']}
]]
console.log(mixedDataTypes);

// Case 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];

// Case 7
console.log(itCompanies);

// Case 8
console.log(itCompanies.length);

// Case 9
console.log(itCompanies[0],itCompanies[itCompanies.length/2],itCompanies[itCompanies.length-1]);

// Case 10
for(each in itCompanies)
    console.log(each);

// Case 11
for(let i = 0;i< itCompanies.length;i++)
    {
        itCompanies[i] = itCompanies[i].toUpperCase();
        console.log(itCompanies[i]);
    }

// Case 12
console.log(itCompanies.toString()+ ' are big IT companies');

// Case 13
const search = 'AMAZON';
for(let i = 0;i< itCompanies.length;i++)
    {
        if(itCompanies[i] === search)
        {
            console.log(search +' Found');break;
        }
        if(i == itCompanies.length-1)
            console.log('Not Found');
    }

// Case 14
let pattern = /o/gi;
for(let i = 0;i< itCompanies.length;i++)
    {
        // console.log(itCompanies[i].match(pattern).length);
        if(itCompanies[i].match(pattern) != null && itCompanies[i].match(pattern).length > 1)
        {
            console.log(itCompanies[i]);
        }
    }

// Case 15
console.log(itCompanies.sort());

// Case 16
console.log(itCompanies.reverse());

// Case 17
console.log(itCompanies.slice(3));

// Case 18
console.log(itCompanies.slice(0,itCompanies.length-3));

// Case 19
console.log(itCompanies.slice(itCompanies.length/2,(itCompanies.length/2)+1));

// Case 20
itCompanies.shift();
console.log(itCompanies);

// Case 21
itCompanies.splice(itCompanies.length/2,1);
console.log(itCompanies);
// Case 22
itCompanies.pop();
console.log(itCompanies);

// Case 23
itCompanies.splice(0);
console.log(itCompanies);

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items



  