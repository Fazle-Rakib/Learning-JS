//Window scope
// a = 'JavaScript' // is a window scope this found anywhere
// b = 10 // this is a window scope variable
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b) // accessible
// letsLearnScope();

//Global scope
let a1 = 'JavaScript' // is a global scope it will be found anywhere in this file
let b1 = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a1, b1) // JavaScript 10, accessible
  if (true) {
    let a1 = 'Python' //Local Scoped[Inside if-else block]
    let b1 = 100
    console.log(a1, b1) // Python 100
  }
  console.log(a1, b1)
}
letsLearnScope()
console.log(a1, b1) // JavaScript 10, accessible

//Difference between var && let,const
function letsLearnScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  // console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  
  for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3
  
// Objects
const person = {
  firstName : 'Mr. Abul',
  lastName : 'Hasan',
  skills :[
    'HTML','CSS','JS'
  ],
  fullStack:[
    ['Node','React','MongoDB'],
    ['Jango','Angular','MySQL']
  ],
  phone :{
    home : '1234567',
    office: '020345'
  },
  getFullName : function(){
    return `${this.firstName} ${this.lastName}`
  }
};

person.nationality = "Bangladeshi";
person.fullStack.push(['Laravel','MySQL']);
person.getFullInfo = function(){
  let skillSet = this.skills.splice(0,this.skills.length-1).join(', ');
  let lastSkill = this.skills.splice(this.skills.length-1)[0];
  let allSkills = `${skillSet} & ${lastSkill}`;
  console.log(skillSet,lastSkill);
  let statement  = `${this.firstName} ${this.lastName} is a ${this.nationality}. He has ${allSkills} skills. His conatact number are => Office : ${this.phone.office}, Home : ${this.phone.home}`;
  return statement;
}

console.log(person.getFullInfo());
// console.log(person.firstName, person['lastName'],person.getFullName(),person.fullStack,person.phone);
console.log(person);

const person1 = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person1);
console.log(copyPerson);

//Object.keys
const keys = Object.keys(copyPerson);
console.log(keys);

console.log(Object.keys(copyPerson.address));

console.log(Object.values(copyPerson));

console.log(Object.entries(copyPerson));

console.log(copyPerson.hasOwnProperty('address'));
console.log(copyPerson.hasOwnProperty('street'));
