/*
Conditional Statements in JavaScript
1. if 
example
if (condition)
  {
  code to be executed if condition is true
  }
2. if else
example
if (condition)
  {
  code to be executed if condition is true
  }
else
  {
  code to be executed if condition is not true
  }
3. if else if else
example
if (condition1)
  {
  code to be executed if condition1 is true
  }
else if (condition2)
  {
  code to be executed if condition2 is true
  }
else
  {
  code to be executed if neither condition1 nor condition2 is true
  }
4. switch
We can use the switch statement to select one of many blocks of code to be executed.
example
switch(n)
{
case 1:
  execute code block 1
  break;
case 2:
  execute code block 2
  break;
default:
  code to be executed if n is different from case 1 and 2
}
*/

var numberOne = 10;
var numberTwo = 20;

if (numberOne < numberTwo) {
    document.write(numberOne + "is less than " + numberTwo);
}

if (numberOne > numberTwo) {
    document.write(numberOne + " is greater than " + numberTwo);
}
else {
    document.write(numberTwo + " is greater than " + numberOne);

}

var marks = 100;
var marksObtained = 60;

if (marksObtained >= 80) {
    document.write("Well done");
}
else if (marksObtained < 80) {
    document.write("Work Hard");
}
else {
    document.write("Concentrate on your studies");
}


/*
4. switch
We can use the switch statement to select one of many blocks of code to be executed.
example
switch(n)
{
case 1:
  execute code block 1
  break;
case 2:
  execute code block 2
  break;
default:
  code to be executed if n is different from case 1 and 2
}
*/

var marksInHistory = 80;

switch(marksInHistory) {
    case 80:
        document.write("Well done");
        break;
    case 70:
        document.write("Work Hard");
        break;
    default:
        document.write("Concentrate");
}

//version 2 of switch statment
switch (marksInHistory) {
    case 80:
    case 75:
        document.write("Well done");
        break;
    case 70:
        document.write("Work Hard");
        break;
    default:
        document.write("Concentrate");
}