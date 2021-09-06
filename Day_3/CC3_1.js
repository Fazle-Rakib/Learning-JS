/* Challenge of completing day 2
Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
Print the string on the browser console using console.log()
Print the length of the string on the browser console using console.log()
Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method
Cut (slice) out the first word of the string using substr() or substring() method
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Check if the string contains a word Script using includes() method
Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true
Use match() method to find all the a’s in 30 Days Of JavaScript
Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
Use repeat() method to print 30 Days Of JavaScript 2 times
*/

// Case 1
let challenge = "30 Days Of JavaScript";

// Case 2
console.log(challenge);

// Case 3
console.log(challenge.length);

// Case 4
console.log(challenge.toUpperCase());

// Case 5
console.log(challenge.toLowerCase());

// Case 6
console.log(challenge.substr(0,2));

// Case 7
console.log(challenge.substring(3,challenge.length));

// Case 8
console.log('Script == ' + challenge.includes('Script'));

// Case 9
console.log(challenge.split());

// Case 10
console.log(challenge.split(' '));

// Case 11
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(' '));

// Case 12
console.log(challenge.replace('JavaScript','Python'));

// Case 13
console.log(challenge.charAt(15));

// Case 14
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// Case 15
console.log(challenge.indexOf('a'));

// Case 16
console.log(challenge.lastIndexOf('a'));

// Case 17
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));

// Case 18
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));

// Case 19
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));

// Case 20
console.log(challenge.trim());

// Case 21
console.log(challenge.startsWith('30'));

// Case 22
console.log(challenge.endsWith('30'));

// Case 23
console.log(challenge.match(/a/gi));

// Case 24
console.log('30 Days of'.concat('JavaScript'));

// Case 25
console.log(challenge.repeat(2));