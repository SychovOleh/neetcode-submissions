class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new MinPriorityQueue();
        for (let n of nums) {
            heap.push(n);
            if (heap.size() > k) {
                heap.pop();
            }
        }
        return heap.pop()
    }
}
