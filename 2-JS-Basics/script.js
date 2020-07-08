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
 */


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






