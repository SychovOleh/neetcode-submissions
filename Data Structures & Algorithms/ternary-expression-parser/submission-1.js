class Solution {
    /**
     * @param {string} expression
     * @return {string}
     */
    parseTernary(expression) {
        const stack = []; // [F, T]
        for (let i = expression.length - 1; i >= 0; i--) {
            const c = expression[i];
            if (c === ':') {
                continue;
            } else if (c === '?') {
                const t = stack.pop();
                const f = stack.pop();
                stack.push(expression[--i] === 'T' ? t : f)
            } else {
                stack.push(c);
            }
        }
        return stack[0];
    }
}
