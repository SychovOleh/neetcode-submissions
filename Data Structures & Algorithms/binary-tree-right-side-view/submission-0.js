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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        
        const res = []; // [[n], [m]]
        const q = new Queue();
        q.push(root);

        while (q.size() > 0) {
            const level = [];
            for (let i = q.size(); i > 0; i--) {
                const node = q.pop();
                if (node.right) q.push(node.right);
                if (node.left) q.push(node.left);
                if (level.length === 0) level.push(node.val);
            }
            res.push(level);
        }

        return res.map(l => l[0]);
    }
}
