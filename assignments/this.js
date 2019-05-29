/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when this isn't defined it will bind to window.
* 2. Implicit binding is when . notation is used. It's whatever us to the left.
* 3. New binding is for making a new object.
* 4. Explicit binding is global context that stands alone.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var myFunction = function() {
    console.log(this);
 }
 
 myFunction();

//  will come up undefined
// Principle 2

// code example for Implicit Binding
const user = {
    name: 'Tyler',
    age: 27,
    greet() {
      alert(`Hello, my name is ${this.name}`)
    }
  }
// Principle 3

// code example for New Binding
function User (name, age) {
  
    this.name = name
    this.age = age
  }
  
  const me = new User('Tyler', 27)
// Principle 4

// code example for Explicit Binding
function greet () {
    alert(`Hello, my name is ${this.name}`)
  }
  
  const user = {
    name: 'Tyler',
    age: 27,
  }