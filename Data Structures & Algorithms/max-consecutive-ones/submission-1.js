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
                max = Math.max(cur, max)
                cur = 0;
                continue;
            }
            cur++;
        }
        return Math.max(cur, max);
    }
}
