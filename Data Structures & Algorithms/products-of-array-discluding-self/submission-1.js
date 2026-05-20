class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // prefix -> O(n)
        // posfix -> O(n)
        // result iterate on nums, use prefix[-1] * postfix[+1] -> O(n)

        // const prefix = new Array(nums.length);
        // const postfix = new Array(nums.length);
        const prefix = [];
        const postfix = [];
        
        for (let i = 0; i < nums.length; i++) {
            const l = i === 0 ? 1 : prefix[i - 1];
            const r = nums[i];
            prefix[i] = l * r;
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            const l = nums[i];
            const r = i === nums.length -  1 ? 1 : postfix[i + 1];
            postfix[i] = l * r;
        }

        // return prefix.concat(';').concat(postfix)

        return nums.map((_v, i) => {
            if (i === 0) {
                return postfix[i + 1];
            }
            if (i === nums.length - 1) {
                return prefix[i - 1];
            }
            return prefix[i - 1] * postfix[i + 1];
        })
    }
}
