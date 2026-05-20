class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // [1, 6, 3, 500, 1, 450, 1, 500, 10, 3]
        let max = 0;
        let l = 0;
        let r = heights.length - 1;
        while (l < r) {
            const area = (r - l) * Math.min(heights[l], heights[r]);
            max = Math.max(max, area);
            
            if (heights[r] < heights[l]) {
                r--;
            } else {
                l++;
            }
        }
        return max;
    }
}
