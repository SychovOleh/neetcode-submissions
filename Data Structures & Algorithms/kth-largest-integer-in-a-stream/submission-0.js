class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = new MinPriorityQueue();
        this.k = k;

        for (let n of nums) {
            this.heap.enqueue(n)
        }
        while (this.heap.size() > k) {
            this.heap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        
        if (this.heap.size < this.k) {
            this.heap.enqueue(val)
        } else if (this.heap.front() < val) {
            this.heap.enqueue(val);
            this.heap.dequeue();
        }
        return this.heap.front();
    }
}
