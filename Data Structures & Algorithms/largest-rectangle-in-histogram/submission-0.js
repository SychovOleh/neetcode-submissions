class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let max = 0;
        for (let i = 0; i < heights.length; i++) {
            let tillI = null;
            while (stack.length > 0 && stack.at(-1)[1] > heights[i]) {
                const [topI, topHeight] = stack.pop();
                // +1 for index diff; -1 height was on previous
                max = Math.max(max, (i - topI) * topHeight);
                tillI = topI;
            }
            if (tillI) {
                stack.push([tillI, heights[i]])
            }
            stack.push([i, heights[i]]);
        }
        for (let [i, h] of stack) {
            max = Math.max(max, (heights.length - i) * h);
        }
        return max;
    }
}
