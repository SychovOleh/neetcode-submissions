class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // ["1","2","+","3","*","4","-"]
        // 1 2 + => 3
        // 3 3 * => 9
        // 9 4 - => 5
        const s = [];
        const o = {
            '+': '+',
            '-': '-',
            '*': '*',
            '/': '/',
        }
        for (let i = 0; i < tokens.length; i++) {
            const t = tokens[i];
            if (o[t]) {
                const b = s.pop();
                const a = s.pop();
                let val;
                if (o[t] === '+') {
                    val = a + b;
                } else if (o[t] === '-') {
                    val = a - b;
                } else if (o[t] === '*') {
                    val = a * b;
                } else {
                    val = a / b;
                }
                s.push(val);
            } else {
                s.push(Number(t));
            }
        }
        return s[0];
    }
}
