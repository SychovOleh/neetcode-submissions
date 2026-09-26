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
     * @return {number}
     */
    goodNodes(root) {
        let count = 0;
        const stack = [];
        const dfs = (node) => {
            if (!node) return;
            if (stack.length === 0 || stack.at(-1) <= node.val) {
                count += 1;
                stack.push(node.val);
            }
            dfs(node.left);
            dfs(node.right);
            if (stack.at(-1) === node.val) {
                stack.pop();
            }
        }
        dfs(root);
        return count;
    }
}
