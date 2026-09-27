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
        let count = 0;
        const findKNode = (node) => {
            if (!node) return;
            
            const left = findKNode(node.left);
            if (left) return left;
            
            count += 1;
            if (count === k) {
                return node;
            }

            const right = findKNode(node.right);
            if (right) return right;

            return;
        }
        const node = findKNode(root);
        return node.val;

    }
}
