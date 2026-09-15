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
    constructor() {
        this.vals = [];
    }

    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if (!root) return 1
        this.kthSmallest(root.left);
        root.val !== undefined && root.val !== null && this.vals.push(root.val);
        this.kthSmallest(root.right);
        return this.vals.at(k - 1);
    }
}
