/* Stacks */

//functions: push, pop, peek (show last element), length

//Creates a stack

let Stack = function () {
    this.count = 0;
    this.storage = {};

    //Adds a value onto the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
        console.log("Adding value into the Stack " + value);
    };

    this.pop = function () {
        if (this.count !== 0) {
            this.count--;
            let removedItem = this.storage[this.count];
            delete this.storage[this.count];
            console.log("Removing from the Stack e:" + removedItem);
        } else {
            console.log("Stack is empty");
        }
    };

    this.size = function () {
        console.log("Stack size is: " + this.count);
    };

    this.peek = function () {
        if (this.storage.length !== 0) {
            console.log("Peek :" + this.storage[this.count - 1]);
        }
    }
};

let myStack = new Stack();

myStack.push(5);
myStack.push(7);
myStack.size(); // 2
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop(); //Stack is Empty
myStack.size(); // 0


