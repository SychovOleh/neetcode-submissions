class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const max = new Array();
        const q = new Deque();
        for (let r = 0; r < nums.length; r++) {
            while (q.size() > 0 && nums[r] >= nums[q.back()]) {
                q.popBack();
            }
            if (q.size() > 0 && q.front() === r - k) {
                q.popFront();
            }
            q.pushBack(r);
            if (r >= k - 1) {
                max.push(nums[q.front()]);
            }
        }
        return max;
    }
}
