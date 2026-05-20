class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            res[i] = nums[i];
            res[i + n] = nums[i]
        }
        return res;
    }
}
