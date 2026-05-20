class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const min = this.stack.length > 0
            ? Math.min(val, this.stack.at(-1)[1])
            : val; 
        this.stack.push([val, min]);
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
        return this.stack.at(-1)[0]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack.at(-1)[1]
    }
}
