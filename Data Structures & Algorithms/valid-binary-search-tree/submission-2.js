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
    isValidBST(root) {
        const dfs = (node, min, max) => {
            if (!node) return true;
            if (node.left && node.val <= node.left.val) {
                return false;
            }
            if (node.right && node.val >= node.right.val) {
                return false;
            }
            if (node.val >= max || node.val <= min) {
                return false
            }
            if (!dfs(node.left, min, node.val) || !dfs(node.right, node.val, max)) {
                return false
            }
            return true
        }
        return dfs(root, -Infinity, Infinity);
    }
}
