class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let l = 0;
        let r = heights.length - 1;
        // [1,7,2,5,4,7,3,6]
        while (l < r) {
            max = Math.max(
                max,
                Math.min(heights[l], heights[r]) * (r - l)
            );
            if (heights[l] < heights[r]) {
                l++;
            } else if (heights[l] > heights[r]) {
                r--;
            } else {
                let n = 1;
                while (l + (n * 2) < r && heights[l - n] === heights[r - n]) {
                    n++;
                }
                if (heights[l - n] < heights[r - n]) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return max;
    }
}
