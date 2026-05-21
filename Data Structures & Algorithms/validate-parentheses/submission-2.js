class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const brackets = {
            '(': ')',
            '{': '}',
            '[': ']',
        };
        const openLen = s.length / 2;
        if (!Number.isInteger(openLen)) {
            return false;
        };
        const stack = [];
        for (let i = 0; i < openLen; i++) {
            const c = s[i];
            if (!brackets[c]) {
                return false
            }
            stack.push(c);
        }
        for (let i = openLen; i < s.length; i++) {
            const v = stack.pop();
            if (brackets[v] !== s[i]) {
                return false;
            }
        }
        return true;
    }
}
