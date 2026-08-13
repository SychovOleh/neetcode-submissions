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
        if (!head) return null;
        let cur = head;
        while (cur) {
            const next = cur.next;
            cur.next = new Node(cur.val, next);
            cur = next;
        }
        cur = head;
        while (cur) {
            if (cur.random) {
                cur.next.random = cur.random.next;
            }
            cur = cur.next.next;
        }
        const headCopy = head.next;
        cur = head;
        while (cur) {
            const origNext = cur.next.next;
            cur.next.next = origNext ? cur.next.next.next : null;
            cur.next = origNext;
            cur = origNext;
        }
        return headCopy;
    }
}
