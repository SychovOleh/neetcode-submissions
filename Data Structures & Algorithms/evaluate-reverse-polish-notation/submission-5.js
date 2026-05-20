class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // reverse tokens is stack
        // pop until operator
        // pick 2 last numbers, apply operator, save
        // if prevNumber -> save
        const o = new Set(['+', '-', '*', '/']);
        const nums = [];

        for (let v of tokens) {
            if (!o.has(v)) {
                nums.push(Number(v));
                continue;
            }
            const n1 = nums.pop();
            const n2 = nums.pop();
            nums.push(this.eval(n1, n2, v));
        }
        return nums[0]
    }

    eval(n1, n2, o) {
        switch(o) {
            case '+': return n2 + n1;
            case '-': return n2 - n1;
            case '/': return Math.trunc(n2 / n1);
            case '*': return n2 * n1;
        }
    }
}
