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
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true;
        const countDepth = (node, n) => {
            if (!node.left && !node.right) {
                return n
            }
            const l = node.left ? countDepth(node.left, n + 1) : n;
            const r = node.right ? countDepth(node.right, n + 1) : n;
            return Math.max(l, r);
        }
        const l = root.left ? countDepth(root.left, 1) : 0;
        const r = root.right ? countDepth(root.right, 1) : 0;
        return Math.abs(l - r) <= 1;
    }
}
