class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const vals = points.map(([x,y]) => [(x - 0)**2 + (y - 0)**2, x, y]);
        const heap = new PriorityQueue((a, b) => a[0] - b[0], vals);
        const res = [];
        for (let i = k; i > 0; i--) {
            const [,x, y] = heap.pop();
            res.push([x, y]);
        }
        return res;
    }
}
