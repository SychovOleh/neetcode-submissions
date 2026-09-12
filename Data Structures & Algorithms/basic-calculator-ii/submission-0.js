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

        while (operators.length > 0) {
            const operator = operators.pop();
            const b = ints.pop();
            const a = ints.pop();
            if (operator === '+') {
                ints.push(a + b);
            } else {
                ints.push(a - b);
            }
        }

        return ints[0];
    }
}
