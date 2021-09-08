// Case 1
let marks;
// marks = parseInt(prompt('Enter marks : '));
console.log(typeof marks);
switch(true)
{
    case (marks >= 80 && marks <= 100):
        console.log('A');
        break;
    case (marks >= 70 && marks <= 79):
        console.log('B');
        break;
    case (marks >= 60 && marks <= 69):
        console.log('C');
        break;
    case (marks >= 50 && marks <= 59):
        console.log('D');
        break;
    case (marks >= 0 && marks <= 49):
        console.log('F');
        break;
    default:
        console.log('Invalid Number');
}

// Case 2
// same as 1

// Case 3
let day;
day = String(prompt('Day : '));
// console.log(day.toLowerCase, typeof day);
if(day.toLowerCase() == "saturday")
{
    console.log('Weekend');
}
else
{
    console.log('work day');
}
// Case 4
// same as 1
