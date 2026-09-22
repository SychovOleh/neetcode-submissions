class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0;
        let r = arr.length - 1;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            // const diffL = Math.abs(arr[m - 1] - x);
            const diffR = Math.abs(arr[m + 1] - x);
            const diffM = Math.abs(arr[m] - x);
            if (arr[m] < x) {
                if (arr[m + 1] < x) {
                    l = m + 1;
                } else if (diffM > diffR) {
                    l = m + 1;
                } else {
                    r = m;
                }
            } else {
                r = m;
            }
        }

        while (r - l + 1 < k) {
            const diffL = Math.abs(arr[l - 1] - x);
            const diffR = Math.abs(arr[r + 1] - x);
            if (r === arr.length - 1) {
                l--;
            } else if (l === 0) {
                r++;
            } else if (diffL > diffR) {
                r++;
            // } else if (diffL < diffR) {
            } else {
                l--;
            }
        }

        return arr.slice(l, r + 1);
    }
}
