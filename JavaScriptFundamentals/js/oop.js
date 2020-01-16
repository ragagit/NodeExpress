/*
Object Oriented Programming in JavaScript

Object
    An Instance of a Class.
Property
    An Object characteristic, such as color.
Method
    An Object capability, such as walk.
Constructor
    A method called at the moment of instantiation.

Inheritance
    A Class can inherit characteristics from another Class.
Encapsulation
    A Class defines only the characteristics of the Object, a method defines only how the method executes.
Abstraction
    The conjunction of complex inheritance, methods, properties of an Object must be able to simulate a reality model.
Polymorphism
    Different Classes might define the same method or property.

Prototype-based programming

Core Objects
Math,Regex,Date etc

Custom Object

*/

// define the Person Class
function Person(name,age) {
    this.name = name;
    this.age = age;

    this.Greet = greet;
    function greet(greeting) {
        return greeting + " " + this.name;
    }

    this.Talk=function (greeting) {
        return "I am a person and I can talk";
    }
}

// define the Student class
function Student() {
    //call parent constructor
    Person.call(this);
}
// inherit person
Student.prototype = new Person();
// correct the constructor pointer because it points to Person
Student.prototype.constructor = Student;

// replace the greet method
Student.prototype.greet = function (greeting) {
    console.log(greeting+" "+this.name+" Your age "+this.age);
}

var studentObj = new Student();
studentObj.name = "Peter";
studentObj.age = 34;
studentObj.greet("Hello");

// check inheritance
console.log(studentObj instanceof Person); // true 
console.log(studentObj instanceof Student); // true

//Abstraction
var aFunction = function () { };

console.log('aFunction is a Function: ' + (aFunction instanceof Function));
console.log('aFunction.prototype is an Object: ' + (aFunction.prototype instanceof Object));

//Polymorphism
function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.Talk = function () {
        return "I am " + this.age + " years old " +
        "and my name is  " + this.name;
    }
}
Employee.prototype = new Person();
Employee.prototype.constructor = Employee;
// The argument, 'obj', can be of any kind
// which method, Talk(), to be executed depend on the object
// that 'obj' refer to.
function showInfo(obj) {
    console.log(obj.Talk());
}

var person = new Person("Matt", 45);
var employee = new Employee("Peter", 20);

showInfo(person);
showInfo(employee);
