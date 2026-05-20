class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let r = nums.length - 1;
        let l = 0;
        // [2,1,2,1]
        //    l r
        while (l <= r) {
            while (l < r && nums[r] === val) {
                r--;
            }
            if (nums[l] === val) {
                nums[l] = nums[r];
                r--
            }
            l++;
        }
        nums.length = r + 1;

        return nums.length;
    }
}
