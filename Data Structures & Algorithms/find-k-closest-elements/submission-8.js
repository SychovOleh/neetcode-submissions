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
            if (arr[m] < x && (
                    arr[m + 1] < x
                    || Math.abs(arr[m] - x) > Math.abs(arr[m + 1] - x)
                )
            ) {
                    l = m + 1;
            } else {
                r = m;
            }
        }

        while (r - l + 1 < k) {
            if (r === arr.length - 1) {
                l--;
            } else if (l === 0) {
                r++;
            } else if (Math.abs(arr[l - 1] - x) > Math.abs(arr[r + 1] - x)) {
                r++;
            } else {
                l--;
            }
        }

        return arr.slice(l, r + 1);
    }
}
