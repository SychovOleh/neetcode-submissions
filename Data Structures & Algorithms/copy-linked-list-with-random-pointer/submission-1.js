// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const nodesMap = new Map();
        let cur = head;
        while (cur) {
            const nodeCopy = new Node(cur.val);
            nodesMap.set(cur, nodeCopy);
            cur = cur.next;
        }
        cur = head;
        while (cur) {
            const copy = nodesMap.get(cur);
            copy.next = nodesMap.get(cur.next) ?? null;
            copy.random = nodesMap.get(cur.random) ?? null;
            cur = cur.next;
        }
        return nodesMap.get(head) ?? null;
    }
}
