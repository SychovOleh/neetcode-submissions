class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0;
        let r = arr.length - k;
        while (l < r) {
            const m = Math.floor((r + l) / 2);
            if (Math.abs(arr[m] - x) > Math.abs(arr[m + k] - x)) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return arr.slice(l, l + k)
    }
}
