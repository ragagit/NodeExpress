/*
Closures in javascript
In JavaScript, if you declare a function within another function, 
then the local variables can remain accessible after returning from the function you called. 

This is demonstrated below, because we call the function callFn(); after we have returned from closureExample(). 
Notice that the code that we call references the variable greeting, which was a local variable of the function closureExample(). 
*/

function closureExample(name) {
    var greeting = 'Hello ' + name; // local variable
    return function () { alert(greeting); };
}

var callFn = closureExample('John');
console.log(callFn);
callFn();





/*
This example shows that the local variables are not copied - they are kept by reference. 
It is kind of like keeping a stack-frame in memory when the outer function exits!

*/
function incrementNumber() {
  // Local variable that ends up within closure
  var num = 777;
  var showAlert = function() { alert(num); }
  num++;
  return showAlert;
}
var getNum = incrementNumber();
getNum();




/*
This one is a real gotcha for many people, so you need to understand it. 
Be very careful if you are defining a function within a loop: the local variables from the closure do not act as you might first think.
*/
function buildList(list) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    var item = 'item' + list[i];
    result.push( function() {alert(item)} );
  }
  return result;
}

function testList() {
  var fnlist = buildList([1,2,3]);
  // using j only to help prevent confusion - could use i
  for (var j = 0; j < fnlist.length; j++) {
    fnlist[j]();
  }
}

testList();



/*
The line result.push( function() {alert(item)} adds a reference to an anonymous function three times to the result array. 
If you are not so familiar with anonymous functions think of it like:
    pointer = function() {alert(item)};
    result.push(pointer);

Note that when you run the example, "item3" is alerted three times!
This is because just like previous examples, there is only one closure for the local variables for buildList. 
When the anonymous functions are called on the line fnlist[j](); they all use the same single closure, 
and they use the current value for i and item within that one closure 
(where i has a value of 2 because the loop had completed, and item has a value of 'item3'). 
*/


