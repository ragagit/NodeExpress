//Single line Comments in JavaScript
/*
  Multiline Comments in JavaScript
*/

//Variables and Data Types in JavaScript
//We declare JavaScript variables with the var keyword

//Example of Numeric Data Type
var pi = 3.14; //a decimal number
var evenNumber = 2; //a whole number
//or
var pi;
pi = 3.14;
document.writeln("Value of Pi " + pi);

//We can perfrom arithmatic operations on numeric values
var marksInMaths=90;
var marksInHistory=80;
var sumOfTwoNumbers = marksInMaths + marksInHistory;
document.writeln(sumOfTwoNumbers);

//Example of String Data Type
var name = "John";
//One statement, many variables
var name = "John", age = 30, job = "Web Developer";

//Example of Boolean Data Type
var result = true;


//Example of undefined Data Type
//Variable declared without a value will have the value
var salary;
//salary will have the value undefined
document.writeln("Salary " + salary);


//Redeclaring a JavaScript variable retains its value
var percentage = 100;
var percentage;
document.writeln("Percentage "+percentage);
//percentage will keep its value as 100

//JavaScript Has Dynamic Types
//This means that the same variable can be used as different types
var general = 5; //numeric data type
general = "some name"; //string data type
general = true;// boolean data type
