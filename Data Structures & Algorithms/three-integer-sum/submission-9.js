class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const t = 0;
        const res = [];
        nums.sort((a,b) => a - b);
        // [-1,0,1,2,-1,-4]
        // [-4,-1,-1,0,1,2]
        for (let i = 0; i < nums.length - 2; i++) {
            if (i >= 1 && nums[i] === nums[i - 1]) {
                continue;
            }
            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                if (nums[i] + nums[l] + nums[r] === t) {
                    res.push([nums[i], nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    // while (l < r && nums[r] === nums[r - 1]) r--;
                    l++;
                    r--;
                } else if (nums[i] + nums[l] + nums[r] > t) {
                    r--;
                } else {
                    l++;
                }
            }
        }
        return res;
    }
}
