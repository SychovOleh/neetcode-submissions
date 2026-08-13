class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        const nodesMap = new Map();
        let cur = head;
        while (cur) {
            let nodeCopy = nodesMap.get(cur);
            if (!nodeCopy) {
                nodeCopy = new Node(cur.val);
                nodesMap.set(cur, nodeCopy);
            }
            
            if (cur.next) {
                let nodeNext = nodesMap.get(cur.next);
                if (!nodeNext) {
                    nodeNext = new Node(cur.next.val);
                    nodesMap.set(cur.next, nodeNext);
                }
                nodeCopy.next = nodeNext;
            }

            if (cur.random) {
                let nodeRandom = nodesMap.get(cur.random);
                if (!nodeRandom) {
                    nodeRandom = new Node(cur.random.val);
                    nodesMap.set(cur.random, nodeRandom);
                }
                nodeCopy.random = nodeRandom;
            }
            
            cur = cur.next;
        }
        return nodesMap.get(head);
    }
}