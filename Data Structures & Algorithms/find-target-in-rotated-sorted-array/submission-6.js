class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (nums[l] < nums[r]) {
                if (nums[m] < target) {
                    l = m + 1;
                } else {
                    r = m
                }
            } else {
                if (nums[l] < nums[m]) {
                    if (target >= nums[l] && target <= nums[m]) {
                        r = m;
                    } else {
                        l = m + 1;
                    }
                } else if (nums[m] < nums[r]) {
                    if (target >= nums[m] && target <= nums[r]) {
                        l = m;
                    } else {
                        r = m + 1;
                    }
                }
            }
        }
        return nums[l] === target ? l : -1;
    }
}
