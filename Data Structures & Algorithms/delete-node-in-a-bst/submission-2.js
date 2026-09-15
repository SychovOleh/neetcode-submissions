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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) return root;
        if (key < root.val) {
            if (root.left) {
                root.left = this.deleteNode(root.left, key);
            }
        } else if (key > root.val) {
            if (root.right) {
                root.right = this.deleteNode(root.right, key);
            }
        } else {
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            let cur = root.right;
            while (cur.left) {
                cur = cur.left
            }
            cur.left = root.left;
            return root.right
            // root.val = cur.val;
            // root.right = this.deleteNode(root.right, cur.val);
        }
        return root;
    }
}
