class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (target === nums[m]) {
                return true
            } else if (nums[l] < nums[m]) {
                if (target < nums[m] && target >= nums[l]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else if (nums[m] < nums[r]) {
                if (target > nums[m] && target <= nums[r]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            } else {
                // l++;
                r--;
            }
        }
        return false
    }
}
