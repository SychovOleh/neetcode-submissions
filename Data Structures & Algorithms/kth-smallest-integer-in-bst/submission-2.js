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
        const dfsCounter = (node) => {
            if (!node) {
                return [false];
            }
            const left = dfsCounter(node.left);
            if (left[0]) {
                return left;
            }
            k -= 1;
            if (k === 0) {
                return [true, node.val];
            }
            const right = dfsCounter(node.right);
            if (right[0]) {
                return right;
            }
            return [false]
        }
        return dfsCounter(root)[1];
    }
}
