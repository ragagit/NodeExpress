//Object.prototype

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.setTitle = setTitle;
    function setTitle(title) {
        this.name=title + " " + name;
    }
}

Person.prototype.getAge = function () {
    return this.age;
}
Person.prototype.lastName = "Samson";

var person = new Person("Peter", "38");
person.setTitle("Mr");
console.log(person.getAge());
console.log(person.lastName);
console.log(person.name);

