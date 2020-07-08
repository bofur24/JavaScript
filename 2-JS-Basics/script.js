/************************************
 * Variables and data types
 */
/*
//JavaScript has dynamic typing: 
//Data types are automatically assigned to variables

var firstName = 'John'; //Type String
console.log(firstName);

var lastName = 'Smith'; // Type String
var age = 28; // Type number

var fullAge = true; // Type Blooean
console.log(fullAge);

var job; // Type Undefined 
console.log(job);

job = 'Teacher'
console.log(job);

// Rule variables must start with _ $ or letter only.
var _3years = 3;
var johnMark = 'John and Mark';

// no JavaScript keywords can be used as variables
*/

/************************************
 * Variable mutation and type coercion
 


 var firstName = 'John';
 var age = 28;

 // type coercion
console.log(firstName +' ' + age); 

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried );

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old' + job + '. Is he married? ' + isMarried );

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/************************************
 * Basic operators
 */

var now, yearJohn, yearMark;
now = 2020 
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - 28;
yearMark = now - 33;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older then John');
var x;
console.log(typeof x);


