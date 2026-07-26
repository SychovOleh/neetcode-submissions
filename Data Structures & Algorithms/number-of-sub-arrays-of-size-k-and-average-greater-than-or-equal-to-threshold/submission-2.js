class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let result = 0;
        let sum = 0;
        let r = 0;
        // arr=[1,1,1,1,1]
        // k=1
        // threshold=0
        for (let l = 0; l <= arr.length - k; l++) {
            // 1 < 0 + 1
            while (r < l + k) {
                sum += arr[r];
                if (r - l + 1 === k) {
                    if (sum / k >= threshold) {
                        result++;
                    }
                    r++
                } else {
                    r++
                }
            }
            sum -= arr[l];
        }
        return result;
    }
}
