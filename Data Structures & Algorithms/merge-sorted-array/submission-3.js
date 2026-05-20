class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i = m + n - 1;
        let l = m - 1;
        let r = n - 1;
        while (i >= 0) {
            if (r < 0) {
                nums1[i] = nums1[l];
                l -= 1;
            } else if (l < 0) {
                nums1[i] = nums2[r];
                r -= 1;
            } else if (nums1[l] > nums2[r]) {
                nums1[i] = nums1[l];
                l -= 1;
            } else {
                nums1[i] = nums2[r];
                r -= 1;                
            }

            i -= 1;
        }
    }
}
