// Case 1
function fullName(name){
    console.log(name)
}
fullName('Fazle Rabbi Rakib');

// Case 2
const fullName1 = (fn,ln) => `${fn} ${ln}`;
console.log(fullName1('Jahir','Khan'));

// Case 3
function addNumners(a,b){
    return a+b;
}
console.log(addNumners(2,7));

// Case 4 & 5 & 6
function area_perimeter_Cal(len,wid,height = 1){
    console.log('Area :' +len*wid);
    console.log(('Perimeter : '+ 2*(len+wid)));
    console.log('Volumn :' +len*wid*height);
}
area_perimeter_Cal(10,20,5);

// Case 7 & 8
const circularCal = (radius) => {
    console.log('Circle Area: '+Math.PI*radius*radius);
    console.log('Circumference : '+2*Math.PI*radius);
}
circularCal(5);

// Case 9
function density(mass,vol){
    console.log('density :' + mass/vol);
}
density(100,10);

// Case 10
const speed = (dis,t) => dis/t;
console.log(speed(50,10));

// Case 11
const weight = (mass,grav = 9.81) => mass*grav;
console.log(weight(25) +' N');

// Case 12
const conversion = Celcius => Celcius*(9/5)+32;
console.log(conversion(32));

// Case 13
function BMI(w,h){
    const bmi = w/(h**2);
    if(bmi < 18.5)
    {
        console.log('Underweight');
    }
    else if(bmi < 24.9)
    {
        console.log('Normal');
    }
    else if(bmi < 29.9)
    {
        console.log('Overweight');
    }
    else
    {
        console.log('Obese');
    }
}
BMI(61,1.8288);
BMI(75,1.4);

// Case 14
function checkSeason(season){
    switch(season)
    {
        case 'Jan':
        case 'Feb':
        case 'March':
            console.log('Summer');
            break;
        default:
            console.log('Unknown');
    }
}
checkSeason('Feb');

// Case 15
const findMax = (...args)=>{
    let max = 0;
    for(let items of args)
    {
        // console.log(max,items);
        if(parseInt(items) > max)
        {
            max = items;
        }
    }
    return max;
}

console.log(findMax(1,2,3));
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

