// Case 1
function solveInEqn(a1,b1,c1 = 0,a2,b2,c2 = 0)
{
    if((a1>0 && a2<0) || (a1<0 && a2>0))
    {
        a1 = (a2)*(a1);
        b1 = (a2)*(b1);
        c1 = (a2)*c1;
    }
    else
    {
        a1 = -1*(a2)*(a1);
        b1 = -1*(a2)*(b1);
        c1 = -1*(a2)*c1;
    }
    if(b1+b2 == 0) return undefined;
    let y = (-1*(c1+c2))/(b1+b2);
    let x ;
    if(a1 != 0)
        x = (-1*(b1*y+c1))/a1;
    else
        x = (-1*(b2*y+c2))/a2;
    return ([x,y]);
}
console.log(solveInEqn(1,-1,1,2,-1,5));
console.log(solveInEqn(0,-3,8,-3,-1,-4));

// Case 2
function solveQuadratic(a,b,c){
    if(a == 0)
    {
        return -c/b;
    }
    const determinant = Math.sqrt(b*b-(4*a*c));
    return ([(-b+ determinant)/(2*a),(-b-determinant)/(2*a)]);
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// Case 3
const printArr = (arr)=>{
    for(each of arr)
    {
        console.log(each);
    }
}
printArr([1,2,4,5,6]);

// Case 4
const showDateTime = ()=>{
    const date = new Date();
    console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
}
showDateTime();

// Case 5
const swapValues = (x,y)=> [y,x];
console.log(swapValues(1,2));
// Case 6
const reverseArray = (arr)=>{
    for(let i = 0;i<=(arr.length/2);i++)
    {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
        // console.log(arr[i],arr[arr.length-1-i]);
    }
    // console.log(arr);
    return arr;
}
console.log(reverseArray([1,2,3,4,5]));
// Case 7
// Case 8
// Case 9
// Case 10
// Case 11
// Case 12
// Case 13
// Case 14
// Case 15
