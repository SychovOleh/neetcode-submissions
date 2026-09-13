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
            const m = Math.floor((r + l) / 2);
            if (arr[m] === x) {
                l = r = m;
                break;
            } else if (arr[m] < x) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        while (r - l + 1 !== k) {
            const diffL = Math.abs(arr[l - 1] - x);
            const diffR = Math.abs(arr[r + 1] - x);
            if (arr[r + 1] === undefined) {
                l--;
            } else if (arr[l + 1] === undefined) {
                r++;
            } else if (diffL < diffR || (diffL === diffR && arr[l] < arr[r])) {
                l--;
            } else {
                r++;
            }
        }

        if (arr[l - 1] !== undefined) {
            const diffL = Math.abs(arr[l - 1] - x);
            const diffR = Math.abs(arr[r] - x);
            if (diffL < diffR || (diffL === diffR && arr[l] < arr[r])) {
                l--;
                r--;
            }            
        }
        if (arr[r + 1] !== undefined) {
            const diffL = Math.abs(arr[l] - x);
            const diffR = Math.abs(arr[r + 1] - x);
            if (diffR < diffL || (diffL === diffR && arr[r] < arr[l])) {
                l++;
                r++;
            }            
        }



        return arr.slice(l, r + 1);
    }
}
