/**
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
2. Check if type of '10' is equal to 10
3. Check if parseInt('9.8') is equal to 10
4. Boolean value is either true or false.
   1. Write three JavaScript statement which provide truthy value.
   2. Write three JavaScript statement which provide falsy value.

5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Find the length of python and jargon and make a falsy comparison statement.

6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. There is no 'on' in both dragon and python

7. Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
 */

// Case 1
let firstName = 'Kabir', lastName = 'Alam', country = 'Bangladesh', city = 'Dhaka', age = 31, isMarried = false, year =1990;
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// Case 2
console.log(typeof('10') == typeof(10));

// Case 3
console.log(parseInt('9.8') == 10);

// Case 4
console.log(4> 3, '10' == 10, 1 == true, 4< 3,'10' === 10, 1=== true);

// Case 5
console.log(4 > 3,
    4 >= 3,
    4 < 3,
    4 <= 3,
    4 == 4,
    4 === 4,
    4 != 4,
    4 !== 4,
    4 != '4',
    4 == '4',
    4 === '4',
    'python'.length != 'jargon'.length);

// Case 6
console.log(4 > 3 && 10 < 12,
    4 > 3 && 10 > 12,
    4 > 3 || 10 < 12,
    4 > 3 || 10 > 12,
    !(4 > 3),
    !(4 < 3),
    !(false),
    !(4 > 3 && 10 < 12),
    !(4 > 3 && 10 > 12),
    !(4 === '4'),
    'dragon'.includes('on') && 'python'.includes('on'));

// Case 7
let date = new Date();
console.log(date.getDate(), date.getDay(), date.getFullYear(), date.getHours(), date.getMonth(), new Date().getTime());