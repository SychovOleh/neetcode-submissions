class Node {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
class MyDeque {
    constructor() {
        this.s = new Node(null);
        this.e = new Node(null);
        this.s.next = this.e;
        this.e.prev = this.s;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const cur = new Node(value);
        const prev = this.e.prev;
        
        prev.next = cur;
        this.e.prev = cur;
        cur.next = this.e;
        cur.prev = prev;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const cur = new Node(value);
        const next = this.s.next;

        next.prev = cur;
        this.s.next = cur;
        cur.prev = this.s;
        cur.next = next;
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.isEmpty()) {
            return -1;
        }

        const val = this.e.prev.val;
        // null - 1 - null
        this.e.prev.prev.next = this.e;
        this.e.prev = this.e.prev.prev;
        
        return val;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) {
            return -1;
        }

        const val = this.s.next.val;
        // null - 1 - null
        this.s.next.next.prev = this.s;
        this.s.next = this.s.next.next;
        
        return val;
    }
    

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.s.next === this.e;
    }
}
