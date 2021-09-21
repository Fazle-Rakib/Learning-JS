//Case 1
import {student} from './resources.js';
const studentJson = JSON.stringify(student,['firstName','lastName','skills'],4);
console.log(studentJson);