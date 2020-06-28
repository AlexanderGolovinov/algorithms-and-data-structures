/* Hash Tables */

//Assosiative arrays with [Key, Value] pairs

/* HASH FUNCTION - hashes the key into the number */

let hash = (string, max) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
};

let HashTable = function () {
    let storage = [];
    const storageLimit = 12;

    this.print = function () {
        console.log(storage);
    };

    this.add = function (key, value) {
        let index = hash(key, storageLimit); //5
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ]
        } else {
            let inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][i] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = function (key) {
        let index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[limit];
        } else {
            for (let i = 0; i < storage[index]; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function (key) {
        let index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };
};

console.log(hash('Aloi', 10));

let ht = new HashTable();
ht.add('beue', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dino');
ht.add('tux', 'cat');
ht.add('vols', 'pinguin');
console.log(ht.lookup('tux'));
ht.print();