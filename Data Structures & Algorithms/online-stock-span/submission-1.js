class StockSpanner {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let top = this.stack.at(-1);
        if (!top) {
            this.stack.push([price, 1]);
            return 1;
        }
        let prev = top;
        let count = 1;
        while(top && top[0] <= price) {
            prev = this.stack.pop();
            count += prev[1];
            top = this.stack.at(-1);
        }
        this.stack.push([price, count]);
        return count;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
