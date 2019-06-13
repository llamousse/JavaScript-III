/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
- In the global scope, the value of "this" is the window or console Object.
* 2. Implicit Binding
- Whenever a function is called with a dot before it, "this" refers to the object before that dot.
* 3. New Binding
- For constructor functions, "this" is the object when it was created and returned.
* 4. Explicit Binding
- "This" is explicitly set to when call or apply method from JavaScript is used. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function coffeeOrder(drink) {
    console.log(this);
    return drink;
}
coffeeOrder("Vanilla Latte");

// Principle 2

// code example for Implicit Binding
const exObj = {
    eventGreeting: 'Welcome to',
    sayEvent: function(eventName) {
        console.log(`${this.eventGreeting} ${eventName}!`);
        console.log(this);
    }
};

console.log(exObj.sayEvent("The Secret Life of Pets 2 Movie"));

// Principle 3

// code example for New Binding
function OrderUp(pickup) {
    this.intro = "Order for ";
    this.name = pickup;
    this.pickupTime = function() {
        console.log(this.intro + this.name + "!");
        console.log(this);
    };
}

const jay = new OrderUp('Jay');
const jim = new OrderUp('Jim');

jay.pickupTime();

// Principle 4

// code example for Explicit Binding
function OrderUp(pickup) {
    this.intro = "Order for ";
    this.name = pickup;
    this.pickupTime = function() {
        console.log(this.intro + this.name + "!");
        console.log(this);
    };
}

const jay = new OrderUp('Jay');
const jim = new OrderUp('Jim');

jay.pickupTime.call(jim);
jim.pickupTime.apply(jay);