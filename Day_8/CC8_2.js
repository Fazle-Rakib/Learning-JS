const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }  

// Case 1
// console.log();
let user = Object.keys(users);
let multiSkillUser,skillNum = 0;
for(k in users)
{
    if(Object.values(users[k])[1].length > skillNum)
    {
        skillNum  = Object.values(users[k])[1].length;
        multiSkillUser = k;
    }
}
console.log(`${multiSkillUser} has max number of ${skillNum} skills`);

// Case 2
let loggedIn = 0,userQ = 0;
for(k in users)
{
    // console.log(Object.values(users[k])[4]);
    if(Object.values(users[k])[3])
    {
        loggedIn++;
    }
    if(Object.values(users[k])[4] == 50)
    {
        userQ++;
    }
}
console.log(`Total logged In : ${loggedIn} && Total user who has 50 points : ${userQ}`);

// Case 3
let userMERN = '';
for(k in users)
{
    // console.log(Object.values(users[k])[1])
    let skillEach = Object.values(users[k])[1];
    let str = '';
    for(each of skillEach)
    {
        str+=each[0];
    }
    // console.log(str);
    if(str.includes('MERN'))
    {
        userMERN+=k + " ";
        // break;
    }
    // console.log(user)
    // if(Object.values(users[k])[1])
    // {
        
    // }
}
console.log(userMERN + 'the MERN stack developer');

// Case 4
users.Rakib = {};
console.log(users);

// Case 5
console.log(Object.keys(users));

// Case 6
console.log(Object.values(users));

// Case 7
const country = {
    name:'Bangladesh',
    capital:'Dhaka',
    population:'160M',
    language:'Bengali'
}
console.log(country);