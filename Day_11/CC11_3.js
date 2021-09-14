// Case 1
// Case 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name,skills,skMarks] = student;
const [htmlScore,cssScore,jsScore,reactScore] = skMarks;
console.log(name, skills, jsScore, reactScore);

// Case 3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

const convertArrayToObject = (students)=>{
    let obj = [];
    for([nam,sk,skS] of students)
    {
        obj.push({name:nam,skills:sk,scores:skS});
    }
    return obj;
}

console.log(convertArrayToObject(students));

// Case 4
const student1 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const newStudent = {...student1};
console.log(newStudent);

const {skills:skl} = newStudent;
skl.frontEnd.push({
    skill:'Bootstrap',
    level:8
});
skl.backEnd.push({
    skills: 'Express',
    level:9
});
skl.dataBase.push({
    skills:'SQL',
    level:8
})
skl.dataScience.push('SQL');
console.log(newStudent);
