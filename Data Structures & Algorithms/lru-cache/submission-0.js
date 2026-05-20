class Node {
    /**
     * @param {number} key
     * @param {number} val
     * @param {Node} prev
     * @param {Node} next
     */
    constructor(key, val, prev = null, next = null) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
        this.left = new Node(-Infinity, -Infinity);
        this.right = new Node(Infinity, Infinity);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) {
            return -1
        }

        const node = this.cache.get(key);
        this.remove(node);
        this.insert(node);

        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (!this.cache.has(key)) {
            const node = new Node(key, value);
            this.cache.set(key, node);
            this.insert(node);
        } else {
            const node = this.cache.get(key);
            node.val = value;
            this.remove(node);
            this.insert(node);
        }

        if (this.cache.size > this.cap) {
            const toEvict = this.left.next;
            this.remove(toEvict);
            this.cache.delete(toEvict.key)
        }
    }

    insert(node) {
        // 1.n = 3
        // 3.p = 1
        // 2.p = 1
        // 2.n = 3
        // 1.n = 2
        // 3.p = 2
        node.prev = this.right.prev;
        node.next = this.right;
        this.right.prev.next = node;
        this.right.prev = node;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = node.prev = null;
    }
}