class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const t = 0;
        nums.sort((a,b) => a - b);
        
        const res = [];
        // [-1,0,1,2,-1,-4]
        // [-4,-1,-1,0,1,2]
        //      l    i r
        for (let i = 0; i < nums.length - 2; i++) {
            while (i > 0 && i < nums.length - 2 && nums[i] === nums[i - 1]) {
                    i++;
            }
            let [l, r] = [i + 1, nums.length - 1];
            while (l < r) {
                if (nums[i] + nums[l] + nums[r] < t) {
                    l++;
                } else if (nums[i] + nums[l] + nums[r] > t) {
                    r--;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
