class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    calculate(s) {
        const ints = [];
        const operators = [];
        let cur = 0;
        function evalMultiOrDivide () {
            let prevOperator = operators.at(-1);
            if (prevOperator === '*' || prevOperator === '/') {
                prevOperator = operators.pop();
                const b = ints.pop();
                const a = ints.pop();
                if (prevOperator === '*') {
                    ints.push(a * b);
                } else {
                    ints.push(Math.trunc(a / b));
                }
            }
        }
        for (let c of s) {
            if (c === ' ') {
                continue;
            } else if (c === '+' || c === '-' || c === '*' | c === '/') {
                ints.push(cur);
                cur = 0;
                evalMultiOrDivide()
                operators.push(c);
            } else {
                cur = cur * 10 + parseInt(c);
            }
        }
        ints.push(cur)
        evalMultiOrDivide();

        if (operators.length === 0) {
            return ints[0];
        }
        
        for (let i = 1; i < ints.length; i++) {
            const operator = operators[i - 1];
            const a = ints[i - 1];
            const b = ints[i]
            if (operator === '+') {
                ints[i] = a + b;
            } else {
                ints[i] = a - b;
            }
        }
        return ints.at(-1)
    }
}
