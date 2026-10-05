class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) return this.findMedianSortedArrays(nums2, nums1);

        const total = nums1.length + nums2.length;
        const half = Math.ceil(total / 2);
        let l = 0;
        let r = nums1.length;
        while (l <= r) {
            const i = Math.floor((l + r) / 2);
            const j = half - i;
            const leftI = i > 0 ? nums1[i - 1] : -Infinity;
            const rightI = i < nums1.length ? nums1[i] : Infinity;
            const leftJ = j > 0 ? nums2[j - 1] : -Infinity;
            const rightJ = j < nums2.length ? nums2[j] : Infinity;
            if (leftI <= rightJ && leftJ <= rightI) {
                if (total % 2 === 1) {
                    return Math.max(leftI, leftJ);
                } else {
                    return (Math.max(leftI, leftJ) + Math.min(rightI, rightJ)) / 2;
                }
            } else if (leftI > rightJ) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }
    }
}
