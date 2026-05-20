class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);

        const res = [];
        for (let i = 0; i < nums.length - 2; i+=1) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                
                if (sum < 0) {
                    l+=1;
                    continue
                }
                if (sum > 0) {
                    r-=1;
                    continue
                }
                res.push([nums[i], nums[l], nums[r]]);

                while (l < r && nums[l] === nums[l + 1]) l+=1;
                while (l < r && nums[r] === nums[r - 1]) r-=1;
                l+=1;
                r-=1;
            }
        }
        return res;
    }
}
