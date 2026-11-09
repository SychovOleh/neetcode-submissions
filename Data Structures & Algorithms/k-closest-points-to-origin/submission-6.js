class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const target = k;
        function quickSelect(l, r) {
            const pivot = points[r];
            let p = l;
            for (let i = l; i <= r; i++) {
                if (points[i][0] ** 2 + points[i][1] ** 2 < pivot[0] ** 2 + pivot[1] ** 2) {
                    [points[i], points[p]] = [points[p], points[i]];
                    p++;
                }
            }
            [points[r], points[p]] = [points[p], points[r]];

            if (p === target) return p;
            else if (p > target) return quickSelect(l, p - 1);
            else if (p < target) return quickSelect(p + 1, r);
        }
        quickSelect(0, points.length - 1);
        return points.slice(0, k);
    }
}
