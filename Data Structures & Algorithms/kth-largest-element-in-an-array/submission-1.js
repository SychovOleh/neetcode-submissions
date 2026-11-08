class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const target = nums.length - k;
        function quickSelect(l, r) {
            const pivot = nums[r];
            let p = l;
            for (let i = l; i < r; i++) {
                if (nums[i] <= pivot) {
                    [nums[i], nums[p]] = [nums[p], nums[i]];
                    p++;
                } 
            }
            [nums[p], nums[r]] = [nums[r], nums[p]];
            
            if (p === target) {
                return nums[p];
            } else if (p < target) {
                return quickSelect(p + 1, r);
            } else {
                return quickSelect(l, p - 1);
            }
        }
        return quickSelect(0, nums.length - 1);
    }
}
