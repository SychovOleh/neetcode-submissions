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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const findKNode = (node) => {
            if (!node) return [0, null];
            
            const left = findKNode(node.left);
            if (left[1]) return left;
            let count = 1 + left[0];
            
            if (count === k) return [count, node];
            
            const right = findKNode(node.right);
            if (right[1]) return right;
            count += right;
            return [count, null];
        }
        const [, node] = findKNode(root);
        return node
    }
}
