class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let [l, r] = [0, nums.length -1];
        while (l <= r) {
            let i = Math.floor((l + r) / 2);
            if (nums[i] > target) {
                r = i - 1;
            } else if (nums[i] < target) {
                l = i + 1;
            } else {
                return i;
            }
        }
        return -1;
    }
}
