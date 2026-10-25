class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new PriorityQueue((a, b) => this.dist(b) - this.dist(a));
        for (let p of points) {
            heap.push(p);
            if (heap.size() > k) {
                heap.pop();
            }
        }
        return heap.toArray();
    }

    dist([x, y]) {
        return x ** 2 + y ** 2;
    }
}
