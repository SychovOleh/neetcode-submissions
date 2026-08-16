class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let s = nums[0];
        let f = nums[nums[0]];
        while (s !== f) {
            s = nums[s];
            f = nums[nums[f]];
        }
        let s2 = 0;
        while (s !== s2) {
            s = nums[s];
            s2 = nums[s2];
        }
        return s;
    }
}
