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
        const indicies = {};
        inorder.forEach((val, i) => indicies[val] = i);
        
        let i = 0;
        const reconstructTree = (l, r) => {
            if (l > r) return null;
            const m = indicies[preorder[i]];
            const node = new TreeNode(preorder[i]);
            i+=1;
            node.left = reconstructTree(l, m - 1);
            node.right = reconstructTree(m + 1, r);
            return node;
        }
        return reconstructTree(0, inorder.length - 1);
    }
}
