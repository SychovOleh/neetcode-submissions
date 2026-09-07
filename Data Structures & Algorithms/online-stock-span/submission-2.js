class StockSpanner {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let count = 1;
        while(this.stack.at(-1) && this.stack.at(-1)[0] <= price) {
            count += this.stack.pop()[1];
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
