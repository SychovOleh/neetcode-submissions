/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(Infinity, head);
        let prev = null;
        let cur = head;
        let prevHead = dummy;
        while (cur) {
            const tail = this.getKNode(cur, k);
            if (!tail) {
                break;
            }
            const nextHead = tail.next
            const curHead = cur;
            prev = nextHead;
            while (cur !== nextHead) {
                const next = cur.next
                cur.next = prev;
                prev = cur;
                cur = next;
            }

            prevHead.next = prev;
            prevHead = curHead;
        }
        return dummy.next;
    }
    getKNode(cur, k) {
        while (cur && k > 1) {
            cur = cur.next;
            k--;
        }
        return cur;
    }
}
