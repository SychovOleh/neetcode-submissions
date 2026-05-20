class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while (l < r) {
            const m = l + Math.floor((r  - l) / 2);
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        const pivot = l;
        const leftResult = this.binarySearch(nums, 0, pivot - 1, target);
        if (leftResult !== -1) {
            return leftResult
        }
        return this.binarySearch(nums, pivot, nums.length - 1, target);
    }

    binarySearch(nums, l, r, target) {
        while (l <= r) {
            const m = l + Math.floor((r  - l) / 2);
            if (nums[m] === target) {
                return m;
            } else if (nums[m] > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return -1;
    }
}
