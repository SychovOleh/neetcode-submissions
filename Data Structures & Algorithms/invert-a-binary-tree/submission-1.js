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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null;
        const tmp = root.right;
        root.right = root.left;
        root.left = tmp
        this.invertTree(root.left);
        this.invertTree(root.right);
        return root;
    }
}
