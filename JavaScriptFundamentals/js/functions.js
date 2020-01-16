
var num=15;
function HelloWorld() {
    document.write("Hello World");
}

function sample(){
    console.log(num);
}

sample();





function GreetUsers(greeting,username) {
var num=10;
    return greeting + " " + username;
}







function PrintGreeting(greeting,username) {
var num=10;
    document.write (greeting + " " + username);
}









function FindEvenNumber(number) {
var num=10;
    if (number % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}



var result = FindEvenNumber(21);
document.write(result);


var person = {};
person.greet = GreetUsers("Hello","Matt");
console.log(person.greet);

person.greet = function (greet, username) {
    return greet + " " + username;
}

console.log(person.greet("Hello", "John"));
