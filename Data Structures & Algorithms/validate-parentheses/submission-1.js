class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pars = {'(': ')', '{': '}', '[': ']'};
        const close = new Set([')', '}', ']']);
        const stack = [];
        for (let c of s) {
            if (close.has(c)) {
                if (stack.pop() !== c) {
                    return false
                }
            } else {
                stack.push(pars[c]);
            }
        }

        return stack.length === 0;
    }
}
