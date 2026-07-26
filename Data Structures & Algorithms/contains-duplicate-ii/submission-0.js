class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        for (let l = 0; l < nums.length - 1; l++) {
            let r = l + 1;
            while (r < nums.length) {
                if (nums[l] === nums[r] && Math.abs(l - r) <= k) {
                    return true
                }
                r++;
            }
        }
        return false
    }
}
