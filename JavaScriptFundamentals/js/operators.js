//Operators in javascript
/*
1. Arithmatic Operators + [plus],-[minus],% [modulus (division remainder)],/ [division], * [multiply], ++ [increment], -- [decrement]
2. Assignment Operators =,+=,-=,*=,/=,%=
3. Concat Strings and Numbers using +
4. Comparison Operators ==,===,!=,!== (different value,different type),> [greater than],< [less than],>= [greater than equal to],
                        <= [less than equal to]
5. Logical Operators &&, || , !
6. Conditional Operator variable_name=(condition)?value1:value2 
*/



var numberOne = 10;
var numberTwo = 20;
var sumOfTwoNumber = numberOne + numberTwo;

var result = numberTwo - numberOne;
var multiply = numberOne * numberTwo;
var divide = numberTwo / numberOne;
var modulus = numberTwo % numberOne;


//document.write(modulus);

var number = 10;
number = number + 10;
number += 10;









var firstName = "Matt";
var lastName = "Daemon";
var fullName = firstName + " " + lastName;

document.write(fullName);




var string = "Hello";
var number = 10;
var resultString = string + number;
document.write(resultString);








/*
4. Comparison Operators ==,===,!=,!== (different value,different type),> [greater than],< [less than],>= [greater than equal to],
                        <= [less than equal to]
5. Logical Operators &&, || , !
6. Conditional Operator variable_name=(condition)?value1:value2 
*/





var numberX = 10;
var numberY = 20;

if (numberX == "10")
    document.writeln("X equal to 10");

if (numberX === "10") {
 document.writeln("True");
}
else
{
document.write("False");
}

if (numberX < numberY) {
    document.writeln("Yes " + numberX + " is less than " + numberY);
}

if (numberY > numberX) {
    document.writeln("Yes " + numberY + " is greater than " + numberX);
}

if (numberX <= 10) {
    document.write("Yes");
}

/*
5. Logical Operators &&, || , !
Logical operators are used to determine the logic between variables or values.
6. Conditional Operator variable_name=(condition)?value1:value2 
*/

var x = 10;
var y = 20;

if (x < y && y > x) {
    document.write("True");
}

if (x < y || y < x) {
    document.write("True");
}

if (!(x == y)) {
    document.write("True");
}

/*
6. Conditional Operator variable_name=(condition)?value1:value2 
conditional operator assigns a value to a variable based on some condition
*/



var age=10;
var resultCondition = (age == 10) ? "Too Young" : "Growing";
document.write(resultCondition);

