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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (!preorder[0]) return null;

        const m = inorder.indexOf(preorder[0]);
        
        const node = new TreeNode(preorder[0]);
        node.left = this.buildTree(preorder.slice(1, m + 1), inorder.slice(0, m));
        node.right = this.buildTree(preorder.slice(m + 1), inorder.slice(m + 1));
        
        return node;
    }
}
