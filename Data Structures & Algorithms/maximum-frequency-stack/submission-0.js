class FreqStack {
    constructor() {
        this.counts = {};
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.counts[val] === undefined) {
            this.counts[val] = 0;
        } else {
            this.counts[val] += 1;
        }
        const freq = this.counts[val];
        if (!this.stack[freq]) {
            this.stack[freq] = [];
        }
        this.stack[freq].push(val);
    }

    /**
     * @return {number}
     */
    pop() {
        const val = this.stack.at(-1).pop();
        if (this.stack.at(-1).length === 0) {
            this.stack.pop();
        }
        this.counts[val] -= 1;
        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
