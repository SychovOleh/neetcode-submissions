class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        return stones.reduce((a, b) => {
            return Math.abs(a - b)
        }, 0)
    }
}
