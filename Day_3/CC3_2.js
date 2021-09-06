/*
1. Using console.log() print out the following statement:

    
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.


2. Using console.log() print out the following quote by Mother Teresa:


    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."


3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
5. Check if 'on' is found in both python and jargon
6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
7. Generate a random number between 0 and 100 inclusively.
8. Generate a random number between 50 and 100 inclusively.
9. Generate a random number between 0 and 255 inclusively.
10. Access the 'JavaScript' string characters using a random number.
11. Use console.log() and escape characters to print the following pattern.

    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125

12.  Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/

// Case 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
    
// Case 2
   console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// Case 3
console.log(typeof('10') == typeof(10));

// Case 4
let num = '9.8';
console.log(parseFloat(num) == 10);
console.log(parseInt(parseFloat(num))+1);

// Case 5 & 6
console.log('python'.includes('on'));
console.log('jargon'.includes('on'));

// Case 7
let randomNum = Math.random(); // 0 to 0.9999
console.log(Math.ceil(randomNum*100));

// Case 8
console.log((Math.ceil(randomNum*100)%50)+50);

// Case 9
console.log((Math.ceil(randomNum*1000)%255));

// Case 10
let string  = "JavaScript";
console.log(string.charAt(Math.ceil(randomNum*10)%10));

// Case 11
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\ ');

// Case 12
let lastString = 'You cannot end a sentence with because because because is a conjunction';
let pattern = /because/gi;
console.log(lastString.match(pattern));
