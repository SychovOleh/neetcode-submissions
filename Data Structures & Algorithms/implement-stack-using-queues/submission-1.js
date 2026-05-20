class MyStack {
    constructor() {
        this.q = null;
        // this.q2 = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const tmpQ = new Queue();
        tmpQ.enqueue(x);
        tmpQ.enqueue(this.q);
        this.q = tmpQ;
    }

    /**
     * @return {number}
     */
    pop() {
        const v = this.q.dequeue();
        this.q = this.q.dequeue();
        return v;
    }

    /**
     * @return {number}
     */
    top() {
        return this.q.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q === null;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
