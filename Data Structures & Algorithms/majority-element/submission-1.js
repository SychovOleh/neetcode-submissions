class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let major = nums[0];
        let count = 1;
        for (let i = 1; i < nums.length; i++) {
            // 1,2,3,2,2,2,5,4,2
            // 1 2 3 2 2 2 2 2 2
            //         2 3 2 1
            if (nums[i] !== major) {
                count--;
            } else {
                count++;
            }

            if (count === 0) {
                major = nums[i];
                count = 1;
            }
        }
        return major;
    }
}
