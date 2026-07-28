class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let r = 0;
        let total = 0;
        let res = Infinity;
        // 
        // [2,1,5,1,5,3]
        for (let l = 0; l < nums.length; l++) {
            while (r < nums.length && total < target) {
                total += nums[r];
                r++;
            }
            if (total >= target) {
                res = Math.min(res, r - l);
            }
            total -= nums[l]
        }
        return res === Infinity ? 0 : res;
    }
}
