/* Sets */
//Like an Array, but no duplicate numbers

//has, values, add, remove, union (combine with another set)
let mySet = function () {
    let collection = [];

    this.has = function (value) {
        return (collection.indexOf(value) !== -1); //returns -1 if nothing is found (true / false)
    };

    this.values = function () {
        return collection;
    };

    this.add = function (val) {
        if (!this.has(val)) {
            collection.push(val);
        } else {
            console.log("Such element already exist " + val);
        }
    };

    this.remove = function (val) {
        if (this.has(val)) {
            let index = collection.indexOf(val);
            collection.splice(index, 1); //Remove 1 element starting at index
        }
    };

    this.size = function () {
        return collection.length;
    };

    //this method returns the union of two sets
    this.union = function (otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(function (e) {
            unionSet.add(e);
        });

        secondSet.forEach(function (e) {
            secondSet.add(e); //add method already does not add values for the duplicates
        });

        return unionSet;
    };

    //this method will return the intersecion of two sets as a new set
    this.intersection = function (otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();

        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        console.log(intersectionSet.values());
        return intersectionSet;
    };

    //this method will return the difference of two sets as a new set
    this.difference = function (otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();

        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        console.log(differenceSet.values());
        return differenceSet;
    };
};

let setA = new mySet();
let setB = new mySet();
setA.add("a"); //*
setA.add("f");
setA.add("b");
setB.add("a"); //*
setB.add("g");
setB.add("d");

setA.difference(setB); //f, b
setA.intersection(setB); // a
