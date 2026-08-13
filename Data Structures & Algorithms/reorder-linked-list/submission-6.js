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
     * @return {void}
     */
    reorderList(head) {
        // 0 1 2 3 4 5
        // s f
        //   s.  f
        //     s     f
        // 0 1 2 3 4
        // s f
        //   s.  f
        //     s.    f
        let s = head;
        let f = head.next;
        while (f && f.next) {
            s = s.next;
            f = f.next.next;
        }
        let prev = null;
        let cur = s.next;
        while (cur) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        s.next = null;
        let l = head;
        let r = prev;
        while (r) {
            const lNext = l.next;
            const rNext = r.next;
            l.next = r;
            r.next = lNext;
            l = lNext;
            r = rNext;
        }
    }
}
