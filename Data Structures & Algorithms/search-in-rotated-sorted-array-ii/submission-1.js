class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target, l = 0, r = nums.length - 1) {
        // let l = 0;
        // let r = nums.length - 1;
        while(l <= r) {
            const m = Math.floor((l + r) / 2);
            if (target === nums[m]) {
                return true;
            // [1,2,3,4,5,6] // 2
            // [3,4,5,6,1,2] // 3
            } else if (nums[l] < nums[m] && target >= nums[l] && target < nums[m]) {
                return this.binarySearch(nums, l, m - 1, target);
            // [3,4,5,6,1,2] // 6
            // [3,4,5,6,1,2] // 1
            } else if (nums[l] < nums[m] && (target > nums[m] || target <= nums[r])) {
                return this.search(nums, target, m + 1, r);
            // [6,1,2,3,4,5] // 6
            // [6,1,2,3,4,5] // 1
            } else if (target < nums[m] || target >= nums[l]) {
                return this.search(nums, target, l, m + 1);
            // [6,1,2,3,4,5] // 4
            } else {
                return this.binarySearch(nums, m + 1, r, target);
            }
        }
        return false;
    }

    binarySearch(arr, l, r, target)  {
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (arr[m] > target) {
                r = m - 1;
            } else if (arr[m] < target) {
                l = m + 1
            } else {
                return true
            }
            return false
        }
    }
}
