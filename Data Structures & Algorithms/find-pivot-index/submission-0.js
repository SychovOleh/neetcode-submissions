class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const prefixSum = new Array(nums.length);
        const postfixSum = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            const prevSum = i === 0 ? 0 : prefixSum[i - 1];
            prefixSum[i] = prevSum + nums[i];
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            const prevSum = i === nums.length - 1 ? 0 : postfixSum[i + 1];
            postfixSum[i] = prevSum + nums[i];
        }
        for (let i = 0; i < nums.length; i++) {
            const prefix = i === 0 ? 0 : prefixSum[i - 1];
            const postfix = i === nums.length - 1 ? 0 : postfixSum[i + 1];
            if (prefix === postfix) {
                return i;
            }            
        }
        return -1
    }
}
