class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;
        let maxL = 0;
        let maxR = 0;
        let total = 0;
        while (l <= r) {
            let m3 = 0;
            if (maxL <= maxR) {
                m3 = Math.min(maxL, maxR) - height[l];
                maxL = Math.max(maxL, height[l])
                l++
            } else {
                m3 = Math.min(maxL, maxR) - height[r];
                maxR = Math.max(maxR, height[r])
                r--;
            }
            if (m3 > 0) {
                total += m3;
            }
        }
        return total;
    }
}
