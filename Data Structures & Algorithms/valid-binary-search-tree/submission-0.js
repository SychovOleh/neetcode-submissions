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
        const dfs = (node) => {
            if (!node) return true;
            if (node.left && node.val <= node.left.val) {
                return false;
            }
            if (node.right && node.val >= node.right.val) {
                return false;
            }
            if (!dfs(node.left) || !dfs(node.right)) {
                return false
            }
            return true
        }
        return dfs(root);
    }
}
