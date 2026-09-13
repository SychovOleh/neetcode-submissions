class Solution {
    /**
     * @param {string} expression
     * @return {string}
     */
    parseTernary(expression) {
        const nums = []; // [F, T]
        for (let i = expression.length - 1; i >= 0; i--) {
            const c = expression[i];
            if (c === ':' || c === '?') continue;
            if (c === 'T') {
                const t = nums.pop();
                nums.pop();
                nums.push(t);
            } else if (c === 'F') {
                nums.pop();
            } else {
                nums.push(c);
            }
        }
        return parseInt(nums[0])
    }
}
