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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) return true;
        if (!root) return false;
        if (this.isSameTree(root, subRoot)) return true;
        if (this.isSameTree(root.left, subRoot)) return true;
        if (this.isSameTree(root.right, subRoot)) return true;
        return false;
    }

    isSameTree(n1, n2) {
        if (!n1 && !n2) return true;
        if (!n1 || !n2 || n1.val !== n2.val) return false;
        return this.isSameTree(n1.left, n2.left) && this.isSameTree(n1.right, n2.right);
    }
}
