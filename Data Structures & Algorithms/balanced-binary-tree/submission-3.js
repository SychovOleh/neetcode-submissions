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
            const isBalanced = isBalancedL && isBalancedR && Math.abs(l - r) <= 1;
            return [isBalanced, Math.max(l, r)];
        }

        return countDepth(root, 0)[0];
    }
}
