const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length) {
            node.prev = this._tail;
            this._tail.next = node;
        } else {
            this._head = node;
        }
        this._tail = node;
        this.length++;
    }

    head() {
        if (this._head) {
            return this._head.data;
        }
        return null;
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        }
        return null;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
        if (this.length) {
            return false;
        }
        return true;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
