class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let cur = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                if (cur > max) {
                    max = cur
                }
                cur = 0;
                continue;
            }
            cur++;
            if (i === nums.length - 1) {
                if (cur > max) {
                    max = cur
                }
            }
        }
        return max;
    }
}
