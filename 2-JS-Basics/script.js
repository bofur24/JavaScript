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
*/

/************************************
 * Operators precedence

 
  var now = 2020;
  var yearJohn = 1989;
  var fullAge = 18;

  // Multiple operators  
  var isFullAge = now - yearJohn >= fullAge; // true
  console.log(isFullAge);

  // Grouping  
  var ageJohn = now - yearJohn;
  var ageMark = 35;
  var average = (ageJohn + ageMark) / 2;
  console.log(average);
  
var x, y;
x = y = (3+5) * 4 -6; // 8 * 4 - 6 // 32 - 6// 26     
console.log(x, y);

// 2 + 4 + 5 // 6 + 5 // 11

// More operators

//x = x * 2
x *= 2;
console.log(x);

//x = x + 10
x += 10;
console.log(x);

//x = x + 1
x++
console.log(x);
 */

 /************************************
 * If / else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var markHeight, johnHeight, markMass, johnMass, markBMI, johnBMI, compareBMI;
markHeight = 5.10;
johnHeight = 5.11;
markMass = 200;
johnMass = 250;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

console.log("Mark's BMI " + markBMI);
console.log("John's BMI " + johnBMI);
compareBMI = markBMI > johnBMI;


if (markBMI > johnBMI) {
  console.log('Mark\'s BMI is higher than John\'s BMI. ')
} else {
  console.log('John\'s BMI is higher than Mark\'s BMI. ')
}








