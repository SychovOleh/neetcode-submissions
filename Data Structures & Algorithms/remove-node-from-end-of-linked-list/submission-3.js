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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = {next: head};
        let l = dummy;
        let r = head;
        for (let i = 1; i < n; i++) {
            r = r.next;
        }
        while (r.next) {
            r = r.next;
            l = l.next;
        }
        l.next = l.next.next;
        return dummy.next;
    }
}
