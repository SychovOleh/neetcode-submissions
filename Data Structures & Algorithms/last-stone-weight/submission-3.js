class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // const heap = MaxPriorityQueue.fromArray(stones);
        const heap = new MaxPriorityQueue();
        for (let s of stones) {
            heap.push(s);
        }
        while (heap.size() > 1) {
            const a = heap.pop();
            const b = heap.pop();
            const diff = Math.abs(a - b);
            if (diff !== 0) {
                heap.push(diff)
            }
        }
        return heap.size() === 0 ? 0 : heap.pop();
    }
}
