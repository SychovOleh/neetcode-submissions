class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (!Number.isInteger(s.length/2)) {
            return false
        }
        const brackets = {
            '(': ')',
            '{': '}',
            '[': ']',
        };
        const stack = [];
        for (const c of s) {
            if (brackets[c]) {
                stack.push(c);
            } else {
                const v = stack.pop();
                if (c !== brackets[v]) {
                    return false;
                }
            }
        }
        return true;
    }
}
