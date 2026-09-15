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
            if (!node) {
                return [true, n]
            }
            n+=1;
            if (!node.left && !node.right) {
                return [true, n];
            }
            const [isBalancedL, l] = countDepth(node.left, n);
            const [isBalancedR, r] = countDepth(node.right, n);
            return [isBalancedL && isBalancedR && Math.abs(l - r) <= 1, Math.max(l, r)];
        }
        const [isBalancedL, l] = countDepth(root.left, 0);
        const [isBalancedR, r] = countDepth(root.right, 0);
        return isBalancedL && isBalancedR && Math.abs(l - r) <= 1;
    }
}
