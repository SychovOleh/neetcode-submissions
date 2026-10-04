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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const vals = [];
        const dfs = (node) => {
            if (!node) {
                vals.push('n');
                return;
            }
            vals.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
        dfs(root);
        return vals.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        // 1,2,n,n,3,4,n,n,5,n,n
        const vals = data.split(',');
        let i = 0;
        const dfs = () => {
            if (vals[i] === 'n') {
                i+=1;
                return null
            };
            const node = new TreeNode(Number(vals[i]));
            i+=1;
            node.left = dfs();
            node.right = dfs();
            return node;
        }
        return dfs();
    }
}
