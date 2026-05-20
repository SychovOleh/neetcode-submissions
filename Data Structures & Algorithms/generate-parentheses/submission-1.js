class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        this.genLeaf(n, 0, 0, '', res);
        return res;
    }
    
    genLeaf(n, openN, closeN, cur, res) {
        if (n === openN && openN === closeN) {
            res.push(cur);
            return;
        }
        if (openN < n) {
            this.genLeaf(n, openN + 1, closeN, cur + '(', res);
        }
        if (closeN < openN) {
            this.genLeaf(n, openN, closeN + 1, cur + ')', res);
        }
    }
}
