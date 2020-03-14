/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

*/


var massMark = 84;
var massJohn = 103;
var heightMark = 1.78;
var heightJohn = 1.83;

var markBMI = massMark / (heightMark * heightMark)
console.log ("Mark BMI" + ' ' + markBMI)

var johnBMI = massJohn / (heightJohn * heightJohn)
console.log ("Mark BMI" + ' ' + johnBMI)

var higherBMI = markBMI > johnBMI
console.log ("Is Mark's BMI higher than John's?" + ' ' + higherBMI)

