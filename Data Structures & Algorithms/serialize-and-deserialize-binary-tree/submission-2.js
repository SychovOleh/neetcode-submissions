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
        let res = '';
        if (!root) return res;
                
        const q = new Deque();
        q.pushBack(root);
        while (q.size() > 0) {
            for (let i = q.size(); i > 0; i--) {
                const node = q.popFront();
                if (node === null) {
                    res += '!#';
                    continue;
                }
                if (i === 1) {
                    res += `${node.val}n`;
                } else {
                    res += `${node.val}#`;
                }
                q.pushBack(node.left);
                q.pushBack(node.right);
            }
        }
        return res;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data) return null;
        
        let parentQ = new Deque();
        const levels = data.split('n');
        let root = null;
        for (let level of levels) {
            let q = new Deque();
            const vals = level.split('#');
            for (let val of vals) {
                if (val === '!') {
                    q.pushBack(null);
                } else {
                    const node = new TreeNode(Number(val));
                    q.pushBack(node);
                }
            }
            for (let i = parentQ.size(); i > 0; i--) {
                const parent = parentQ.popFront();
                if (!parent) continue;
                const left = q.popFront();
                const right = q.popFront();
                if (left !== null) parent.left = left;
                if (right !== null) parent.right = right;
                parentQ.pushBack(left);
                parentQ.pushBack(right);
            }
            if (!root) {
                root = q.front();
                parentQ.pushBack(root);
            }
        }
        return root;
    }
}
