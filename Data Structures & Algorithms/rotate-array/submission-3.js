class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        // reverse nums
        // reverse (0 - k-1), (k - End)
        // O(n), O(1)
        k = k % nums.length;
        this.reverse(nums, 0, nums.length - 1);
        this.reverse(nums, 0, k - 1);
        this.reverse(nums, k, nums.length - 1);
    }
    
    reverse(arr, start, end) {
        let r = end;
        let l = start;
        while (l < r) {
            [arr[l],arr[r]] = [arr[r], arr[l]]
            l++;
            r--;
        }
    }
}
