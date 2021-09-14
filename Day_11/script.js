// ***** Destructing Arrays ******
const numbers = [1,2,3,4];
let [n1,n2,...rest] = numbers;
console.log(n1,n2);
console.log(rest); // an array of rest of the element

const fullStack = [['HTML','CSS','JS'],
['Node','Express','MongoDB']];

let [front, back] = fullStack;
console.log(front,back);

//Skip some array values
let [sn1,,sn3,sn4] = numbers; // 2 is omitted
console.log(sn1,sn3,sn4);

// assigning default value in array
let [fn = 'Mr.',mn,ln] = [undefined,'Abul','Hasan'];
console.log(fn,mn,ln);

// Destructuring during itearation
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];

for(each of countries)
{
    console.log(each);
}

for([cou,ci] of countries)
{
    console.log(cou,ci);
}


// ***** Destructing Objects ******
const rectangle = {
    width: 20,
    height: 10,
    area: 200
};

let { width: w, height: h, area: a, perimeter: p } = rectangle
console.log(w, h, a, p); //perimeter is undefined here

let { width: w1, height: h1, area: a1, perimeter: p1 =60 } = rectangle
console.log(w1, h1, a1, p1); //perimeter has default value here

let {w2,h2} = rectangle;
console.log(w2,h2); // undefined undefined

// Obj parameter without destructuring 
const rect = {
    width: 20,
    height: 10
  }

const calculatePerimeter = (rectangle)=>{
    return 2*(rectangle.height+rectangle.width);
}

const calculatePerimeterDes = ({ width, height }) => {
    return 2 * (width + height)
}

console.log(calculatePerimeterDes(rect)) // 60
console.log(calculatePerimeter(rect)) // 60


//Obj destructuring during iteration
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]
for(const each of todoList)
{
    console.log(each.task,each.time,each.completed);
}

for (const {task, time, completed} of todoList){
    console.log(task, time, completed);
}

//Spread or Rest Operator
const countriesEu = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
]

let [gem, fra, , ...nordicCountries] = countriesEu

console.log(gem)
console.log(fra)
console.log(nordicCountries)

//Copying obj & array
let copyEu = [...countriesEu];
console.log(copyEu);

const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
}

//Values with key copy are assigned to copiedUser
const copiedUser = {...user};
copiedUser.name = 'Hasan';
console.log(user,copiedUser);

//The reference is copied to CU
const CU = user;
CU.name = 'Abul'
console.log(user,CU);

//Modifying while copying
const CU2 = {...user,title:'teacher'};
console.log(CU2);
  

  
  