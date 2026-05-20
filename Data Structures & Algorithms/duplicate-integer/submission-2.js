class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     const existing = {};
    //     for (let i = 0; i < nums.length; i++) {
    //         if (existing[nums[i]] !== undefined) {
    //             return true;
    //         }
    //         existing[nums[i]] = true;
    //     }
    //     return false
    // }

        hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}


