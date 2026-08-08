class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                this.prefix[i] = nums[i];
                continue;
            }
            this.prefix[i] = this.prefix[i - 1] + nums[i];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const l = left <= 0 ? 0 : this.prefix[left - 1];
        return this.prefix[right] - l;
    }
}
 