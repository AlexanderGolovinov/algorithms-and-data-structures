/* Queues [First IN - First OUT] */

let myQueue = function () {

    let collection = [];

    this.print = function () {
        console.log(collection);
    };

    this.enqueue = function (val) {
        collection.push(val);
    };

    this.dequeue = function () {
        /**
         * Removes the first element from an array and returns it.
         */
        return collection.shift();
    };

    this.front = function () {
      return collection[0];
    };

    this.size = function () {
        console.log(collection.length);
        return collection.length;
    };

    this.isEmpty = function () {
        return (collection.length === 0);
    }

};

let queue = new myQueue();
queue.enqueue("Alexander");
queue.enqueue("Vova");
queue.enqueue("Mikhail");
queue.size(); //3
console.log(queue.isEmpty()); //false
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.size(); //0
console.log(queue.isEmpty()); //true

