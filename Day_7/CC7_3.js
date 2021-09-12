// Case 1
const userIdGeneratedByUser = (l,n)=>{
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3"];
    for(let k = 0;k<n;k++)
    {
        str = "Random : ";
        for(let  i =0;i<=l;i++)
        {
            str+= alphabet[(Math.floor(Math.random()*100) % 30)];
        }
        console.log(str);
    }
    
}
let len;
// len = prompt("Length :");
let num;
// num = prompt("Number :");
userIdGeneratedByUser(len,num);

// Case 2,3,4,5,6,7
// same as 1

// Case 8
const suffleArray = (arr)=>{
    let len = arr.length;
    let isTaken = new Array(len);
    isTaken.fill(false);
    let preArr = new Array(5);
    for(let i = 0;i<len;i++)
    {
        while(1)
        {
            const ind = Math.ceil(Math.random()*10)%len;
            // console.log(ind);
            if(!isTaken[ind])
            {
                preArr[i] = arr[ind];
                // console.log(preArr,i,ind);
                isTaken[ind] = true;
                break;
            }
        }
    }
    console.log(preArr);

}
suffleArray([1,4,3,2,5]);
// Case 9
// Case 10
// Case 11,12,13
const sumOf = (arr)=>{
    let sum = 0;
    for(let i = 0;i<arr.length;i++)
    {
        if(typeof(arr[i]) != 'number')
        {
            return 'Insert Number';
        }
        sum+=arr[i];
    }
    return ([sum,sum/arr.length]);
}
console.log(sumOf([1,2,3,4,5]));

