class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const op = {
            "+": true,
            "-": true,
            "/": true,
            "*": true,
        };
        const values = [];
        for (const t of tokens) {
            if (!op[t]) {
                values.push(Number(t));
                continue;
            }
            const b = values.pop();
            const a = values.pop();
            switch(t) {
                case '+':
                    values.push(a + b);
                    break;
                case '-':
                    values.push(a - b);
                    break;
                case '*':
                    values.push(a * b);
                    break;
                case '/':
                    values.push(Math.trunc(a / b));
                    break;
            }
        }
        return values[0];
    }
}
