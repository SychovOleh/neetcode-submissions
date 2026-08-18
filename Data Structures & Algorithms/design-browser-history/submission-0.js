class Node {
    constructor(val = null) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.head = new Node('HEAD');
        this.tail = new Node('TAIL');
        this.cur = new Node(homepage);
        this.cur.prev = this.head;
        this.cur.next = this.tail;
        this.head.next = this.cur;
        this.tail.prev = this.cur;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const node = new Node(url);
        node.next = this.tail;
        node.prev = this.cur;
        this.tail.prev = node;
        this.cur.next = node;
        this.cur = node;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while (steps > 0 && this.cur.prev !== this.head) {
            this.cur = this.cur.prev;
            steps -= 1;
        }
        return this.cur.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (steps > 0 && this.cur.next !== this.tail) {
            this.cur = this.cur.next;
            steps -= 1;
        }
        return this.cur.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
