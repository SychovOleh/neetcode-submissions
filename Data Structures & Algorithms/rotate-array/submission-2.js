class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        // reverse nums
        // reverse k portion
        // O(n), O(1)
        k = k % nums.length;
        nums.splice(0, 0, ...nums.splice(-k));
    }
}
