class Node {
    constructor(val = null, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }


    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let cur = this.head.next;
        while (index > 0 && cur !== this.tail) {
            cur = cur.next;
            index -= 1;
        }
        if (cur === this.tail || index > 0) {
            return -1;
        }
        return cur.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const node = new Node(val, this.head.next, this.head)
        this.head.next.prev = node;
        this.head.next = node;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const node = new Node(val, this.tail, this.tail.prev);
        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        let cur = this.head.next;
        while (index > 0 && cur) {
            cur = cur.next;
            index -= 1;
        }
        if (index > 0) {
            return;
        }
        const node = new Node(val, cur, cur.prev);
        cur.prev.next = node;
        cur.prev = node;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        let cur = this.head.next;
        while (index > 0 && cur !== this.tail) {
            cur = cur.next;
            index -= 1;
        }
        if (index > 0 || cur === this.tail) {
            return;
        }
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
    }
}
