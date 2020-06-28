/* Linked List - dynamic size, efficient insertions and deletions, no waste of memory */

function LinkedList() {
    let length = 0;
    let head = null;

    let Node = function (element) {
        this.element = element;
        this.next = null;
    };

    this.size = function () {
        return length;
    };

    this.add = function (element) {
        let node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            let currentNode = head; //always start loop from head
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };

    this.delete = function (element) {
        let previousNode;
        if (head === null) {
            return null;
        } else {
            let currentNode = head;
            while (currentNode.next.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    };

    this.addAt = function (index, element) {
        let node = new Node(element);

        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index > length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }
}

let list = new LinkedList();
list.add('Kitten');
list.add('Human');
list.add('Dog');
console.log(list.size());
list.delete('Dog');
console.log(list.size());

