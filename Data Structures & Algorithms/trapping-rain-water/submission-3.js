class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let total = 0;
        let l = 0;
        let prevL = l;
        for (let r = 0; r < height.length; r++) {
            if (height[l] <= height[r]) {
                while (l < r) {
                    const min = Math.min(height[prevL], height[r]);
                    const m3 = min - height[l];
                    if (m3 > 0) {
                        total += m3;
                    }
                    l++;
                }
                prevL = l;
            }
        }
        return total;
    }
}
