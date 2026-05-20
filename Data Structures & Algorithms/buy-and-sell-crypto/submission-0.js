class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // sol: 2 pointers
        // L if negative diff
        let max = 0;
        let l = 0;
        for (let r = 1; r < prices.length; r++) {
            max = Math.max(max, prices[r] - prices[l]);
            if (prices[l] > prices[r]) {
                l = r;
            }
            // while (l < r && prices[l] > prices[r]) {
            //     l++;
            // }
        }
        return max;
    }
}
