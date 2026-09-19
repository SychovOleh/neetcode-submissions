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
        if (!preorder.length || !inorder.length) return null;

        const node = new TreeNode(preorder[0]);
        const i = inorder.indexOf(preorder[0]);
        node.left = this.buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
        node.right = this.buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
        
        return node;
    }
}
