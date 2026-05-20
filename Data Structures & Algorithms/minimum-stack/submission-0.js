class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push([val, val]);
            return;
        }
        this.stack.push([val, Math.min(this.getMin(), val)]);
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop()[0];
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1][0]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1][1]
    }
}
