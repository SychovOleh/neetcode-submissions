/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const dfs = (node, res) => {
            if (!node) {
                res.push(null);
                return
            }
            dfs(node.left, res);
            res.push(node.val);
            dfs(node.right, res);
        }
        const pVals = [];
        const qVals = [];
        dfs(p, pVals);
        dfs(q, qVals);
        const len = Math.max(pVals.length, qVals.length);
        for (let i = 0; i < len; i++) {
            if (pVals[i] !== qVals[i]) return false
        }
        return true
    }
}
