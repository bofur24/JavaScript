/*************************************
 * CODING CHALLENGE 1
 */

 /* 
 Mark and John are trying to compare their BMI (body Mass Index), which is calculated using the formula:
 BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

 1. Store Mark's and John's mass and height in variables.
 2. Calculate both their BMIs
 3. Create a boolean variable containing information about wether Mark has a higher BMI than John.
 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
 */


var markHeight, johnHeight, markMass, johnMass, markBMI, johnBMI, compareBMI;
markHeight = 5.10;
johnHeight = 5.11;
markMass = 200;
johnMass = 250;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

compareBMI = markBMI > johnBMI;

console.log("Mark's BMI " + markBMI);
console.log("John's BMI " + johnBMI);

console.log("Is mark's BMI higher than John's? " + compareBMI )