class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // [6,1,2,3,4,5] 3
        // [7,8,1,2,3,4,5] 8
        // [4,5,6,7,0,1,2] 0
        // [3,5,6,0,1,2] 5
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            const m = l + Math.floor((r  - l) / 2);
            if (target === nums[m]) return m;

            if (nums[m] > nums[r]) {
                if (target < nums[l] || target > nums[m]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            } else {
                if (target > nums[r] || target < nums[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
            // if ((nums[m] > nums[r] && target < nums[l]) || target <= nums[r]) {
            //         l = m + 1;
            //     } else {
            //         r = m - 1;
            //     }
            // }
        }
        return -1;

        // let l = 0;
        // let r = nums.length - 1;
        // while (l < r) {
        //     const m = l + Math.floor((r  - l) / 2);
        //     if (nums[m] > nums[r]) {
        //         l = m + 1;
        //     } else {
        //         r = m;
        //     }
        // }
        // const pivot = l;
        // const leftResult = this.binarySearch(nums, 0, pivot - 1, target);
        // if (leftResult !== -1) {
        //     return leftResult
        // }
        // return this.binarySearch(nums, pivot, nums.length - 1, target);
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
