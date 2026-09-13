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
        while (r - l + 1 > k) {
            const diffL = Math.abs(arr[l] - x);
            const diffR = Math.abs(arr[r] - x);
            if (diffL <= diffR) {
                r--;
            } else {
                l++;
            }
        }
        return arr.slice(l, r + 1);
    }
}
