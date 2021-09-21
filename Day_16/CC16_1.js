import {skills,age,isMarried,student} from './resources.js';
// Case 1
const skillsJson = JSON.stringify(skills,undefined,4);
console.log(skillsJson, typeof skillsJson);

// Case 2
const ageJson = JSON.stringify(age,undefined,4);
console.log(ageJson);

// Case 3
const isMarriedJson = JSON.stringify(isMarried,undefined,4);
console.log(isMarriedJson);

// Case 4
const studentJson = JSON.stringify(student,undefined,4);
console.log(studentJson);