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
    maxPathSum(root) {
        if (!root) return null;
        let max = root.val;
        const dfs = (node) => {
            if (!node) return -Infinity;
            const l = dfs(node.left);
            const r = dfs(node.right);
            max = Math.max(
                max,
                l,
                r,
                node.val + l,
                node.val + r,
                node.val + l + r
            );
            if (l >= r && l > 0) {
                return node.val + l;
            } else if (r > l && r > 0) {
                return node.val + r;
            } else {
                return node.val
            }
        }
        dfs(root)
        return max;
    }
}
