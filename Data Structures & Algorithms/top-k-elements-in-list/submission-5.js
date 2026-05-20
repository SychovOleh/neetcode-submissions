class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // counts O(n) ; 0(n)
        // bucket sort List<count, List<num>> O(n) ; O(n)
        // res O(1) ; O(1)
        const counts = {}; // 0(n)
        const sorted = new Array(nums.length + 1); // 0(n)
        const res = []; // O(1)

        for (let n of nums) { // 0(n)
            counts[n] = (counts[n] ?? 0) + 1;
        }
        for (let [num, count] of Object.entries(counts)) { // 0(n)
            if (sorted[count] === undefined) {
                sorted[count] = [];
            }
            sorted[count].push(num);
        }

        let i = sorted.length - 1;
        while (res.length < k && i >= 0) { // 0(n)
            if (sorted[i] !== undefined) {
                for (let n of sorted[i]) { // O(k)
                    res.push(n);
                }
            }
            i--;
        }

        return res;
    }
}
