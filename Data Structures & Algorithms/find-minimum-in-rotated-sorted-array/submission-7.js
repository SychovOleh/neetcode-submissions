class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        
        while (l < r) {
            const m = Math.floor((l + r) / 2);    
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else if (nums[m] < nums[r]) {
                r = m;
            } else {
                return nums[m];
            }
        }
        return nums[l]
    }
}
