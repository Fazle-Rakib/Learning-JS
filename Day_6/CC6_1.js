// Case 1
for(let i = 0;i<=10;i++)
{
    console.log(i);
}

let i = 0;
while(i<=10)
{
    console.log(i);
    i++;
}

i = 0;
do{
    console.log(i);
    i++;
}while(i<=10);

// Case 2
for(let i = 10;i>=0;i--)
{
    console.log(i);
}

i = 10;
while(i>=0)
{
    console.log(i);
    i--;
}

i = 10;
do{
    console.log(i);
    i--;
}while(i>= 0);

// Case 3
// const n = prompt('N : ');
const n = 1;
for(i = 0;i<= n;i++)
{
    console.log(i);
}

// Case 4
for(i = 1;i<= 7;i++)
{
    let str = '';
    for(let j = 1;j<=i;j++)
    {
        str+='#';
    }
    console.log(str);
}

// Case 5
for(i = 0;i<=10;i++)
{
    console.log(`${i} * ${i} = ${i * i}`);
}

// Case 6
console.log(`{i}  {i ** 2} {i ** 3}`);
for(i = 0;i<=10;i++)
{
    console.log(`${i} \t ${i ** 2} \t ${i ** 3}`);
}

// Case 7
let str = 'Even : ';
for(i = 0;i<=10;i++)
{
    if(i%2 == 0)
        str+= i.toString() + ' ';
}
console.log(str);

// Case 8
str = 'Odd : ';
for(i = 0;i<=10;i++)
{
    if(i%2 == 1)
        str+= i.toString() + ' ';
}
console.log(str);

// Case 9
let arr = new Array(100);
arr.fill(0);
arr[1] = 1;
// console.log(arr);
str = 'Prime :';
for(i = 2;i<=10;i++)
{
    if(arr[i] == 0)
    {
        for(j = i*i;j<=100;j+=i)
        {
            arr[j] = 1;
        }
    }
}
for(i = 1;i<=100;i++)
{
    if(arr[i] == 0)
        str+= i.toString() + ' ';
}
console.log(str);

// Case 10 & 11
let sum = 0,oddSum = 0;
for(i = 1;i<=100;i++)
{
    sum+=i;
    if(i%2)
    {
        oddSum+=i;
    }
}
console.log(sum,oddSum);

// Case 12
console.log(oddSum,sum-oddSum,new Array(oddSum,sum-oddSum));

// Case 13
let ranArr = new Array();
for(i = 0;i<5;i++)
{
    ranArr.push(Math.floor(Math.random()*10));
}
console.log(ranArr);

// Case 14
ranArr.splice(0);

while(ranArr.length < 6)
{
    const isIt = ranArr.push(Math.floor(Math.random()*10));
    if(!ranArr.includes(isIt))
    {
        ranArr.push(isIt);
    }
}
console.log(ranArr);

// Case 15
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3"];
str = "Random 6 : ";
for(i = 0;i<6;i++)
{
    str+= alphabet[(Math.floor(Math.random()*100) % 30)];
}
console.log(str);

