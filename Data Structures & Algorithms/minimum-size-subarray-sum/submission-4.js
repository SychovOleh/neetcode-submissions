class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        let minLength = Infinity;
        let total = 0;
        for (let r = 0; r < nums.length; r++) {
            total += nums[r];
            while(total >= target && l <= r) {
                minLength = Math.min(r - l + 1, minLength);
                total -= nums[l];
                l++;
            }
        }
        return minLength === Infinity ? 0 : minLength;
    }
}
