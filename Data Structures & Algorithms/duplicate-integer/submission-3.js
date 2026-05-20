class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const existing = {};
        for (let i = 0; i < nums.length; i++) {
            if (existing[nums[i]] !== undefined) {
                return true;
            }
            existing[nums[i]] = true;
        }
        return false
    }
}


