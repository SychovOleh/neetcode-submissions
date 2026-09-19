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
        let preI = 0;
        let inI = 0;

        const dfs = (limit) => {
            if (preI === preorder.length) return null;
            if (inorder[inI] === limit) {
                inI++;
                return null;
            }
            const node = new TreeNode(preorder[preI++]);
            node.left = dfs(node.val);
            node.right = dfs(limit);
            return node;
        }
        
        return dfs(Infinity);
    }
}
