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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let d = 0;
        const dfs = (node, h) => {
            if (!node) {
                return h;
            }
            const lH = dfs(node.left, h);
            const rH = dfs(node.right, h);
            d = Math.max(d, lH + rH);
            return Math.max(lH, rH) + 1;
        }
        dfs(root, 0);
        return d;
    }
}
