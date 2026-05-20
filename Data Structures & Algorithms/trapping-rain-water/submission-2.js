class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;
        let maxL = height[l];
        let maxR = height[r];
        let total = 0;
        
        // [3,1,3,2]
        while (l < r) {
            if (maxL <= maxR) {
                const cur = Math.min(maxL, maxR) - height[l];
                if (cur > 0) {
                    total += cur;
                }
                l++;
                maxL = Math.max(maxL, height[l]);
            } else {
                const cur = Math.min(maxL, maxR) - height[r];
                if (cur > 0) {
                    total += cur;
                }
                r--;
                maxR = Math.max(maxR, height[r]);
            }
        }
        
        return total
    }
}
