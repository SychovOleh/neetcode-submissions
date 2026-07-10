class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let L = 0;
        let R = nums.length - 1;
        while (L <= R) {
            const M = L + Math.floor((R - L) / 2);
            if (nums[M] > target) {
                R = M - 1;
            } else if (nums[M] < target) {
                L = M + 1;
            } else {
                return M;
            }
        }
        return -1;
    }
}
