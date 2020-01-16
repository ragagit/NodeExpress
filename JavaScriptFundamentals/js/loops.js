/*
Loops in javascript
Loops can execute a block of code a number of times

1. For Loops
loops through a block of code a number of times
2. For/In Loop
loops through the properties of an object
3. While Loop
The while loop loops through a block of code as long as a specified condition is true.
4. Do..While Loop
This loop will execute the code block once, before checking if the condition is true, 
then it will repeat the loop as long as the condition is true
*/


var students=["Jacob","John","martin"];
for (var i = 0; i < students.length; i++) {
    document.write(students[i]);
    document.write("<br/>");
}





/*
2. For/In Loop
loops through the properties of an object
*/


var person = {};
person.firstName = "John";
person.age = 19;
person.job = "Video Jockey";

for (properties in person) {
    document.write(person[properties]);
    //adds a new line
    document.write("<br/>");
}


/*
3. While Loop
The while loop loops through a block of code as long as a specified condition is true.
*/

var numbers = 0;
while(numbers<=10)
{
    document.write(numbers);
    document.write("<br/>");
    numbers++;
}







/*
4. Do..While Loop
This loop will execute the code block once, before checking if the condition is
true, then it will repeat the loop as long as the condition is true
*/

var number=10;
do
{
    document.write(number);
    document.write("<br/>");
    number++;
}
while(number<=20)


/*
Break and Continue Statements in javascript
The break statement breaks the loop and continues executing the code after the loop (if there is any):

The continue statement breaks one iteration (in the given loop), if a specified condition occurs, 
and continues with the next iteration in the loop.
*/


for (var i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    document.write(i);
    document.write("<br/>");
}

document.write("Outside Loop");

for (var i = 0; i < 10; i++) {
    if (i == 6) {
        continue;
    }
    else {
        document.write(i);
        document.write("<br/>");
    }
}