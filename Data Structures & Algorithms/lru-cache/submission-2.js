class Node {
    constructor(key = 0, val = 0) {
        this.key = key;
        this.val = val;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = {};
        this.size = 0;
        this.cap = capacity;
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let node = this.cache[key];
        if (!node) return -1;

        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
        
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let node = this.cache[key];
        if (!node) {
            this.size += 1;
            node = new Node(key, value);
            this.cache[key] = node;
            
            if (this.size > this.cap) {
                const last = this.tail.prev;
                last.prev.next = this.tail;
                this.tail.prev = last.prev;
                delete this.cache[last.key];
                this.size -= 1;
            }
        } else {
            node.val = value;
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }
}
