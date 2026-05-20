
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let prevChunkTail = dummy;
        let curHead = head;
        while (true) {
            const chunkTail = this.findChunkTail(curHead, k);
            if (!chunkTail) {
                break
            }
            const nextGroup = chunkTail.next;
            chunkTail.next = null;
            const newHead = this.reverse(curHead);
            prevChunkTail.next = newHead;
            prevChunkTail = curHead;
            curHead.next = nextGroup;
            curHead = nextGroup;
        }
        return dummy.next;
    }

    reverse(node) {
        let prev = null;
        let cur = node;
        while (cur) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }

    findChunkTail(n, k) {
        let i = 1;
        while (n && i < k) {
            n = n.next;
            i++;
        }
    
        return n;
    }    
}