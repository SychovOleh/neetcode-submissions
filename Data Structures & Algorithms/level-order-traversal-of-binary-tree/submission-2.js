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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return []
        const res = [];
        const q = new Queue();
        q.push(root);
        while (q.size() > 0) {
            const level = [];
            for (let i = q.size(); i > 0; i--) {
                let cur = q.pop();
                if (cur.left) q.push(cur.left);
                if (cur.right) q.push(cur.right);
                level.push(cur.val);
            }
            res.push(level);
        }

        return res;
    }
}
