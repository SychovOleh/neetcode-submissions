class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // map nums {num : count} ; O n
        // transform to matrix ; O n
        // sort by count ; O log n
        const counts = {};
        for(let n of nums) {
            counts[n] = (counts[n] ?? 0) + 1;
        }
        const m = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        const res = [];
        for (let i = 0; i < k; i++) {
            res.push(m[i][0]);
        }
        return res;
    }
}
