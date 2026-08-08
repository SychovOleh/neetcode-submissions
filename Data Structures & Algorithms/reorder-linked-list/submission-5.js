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
        // half
        let [s ,f] = [head, head];
        while (f && f.next) {
            s = s.next;
            f = f.next.next;
        }
        // reverse the second half
        let prev = null;
        let cur = s.next;
        while (cur) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        s.next = null;
        // merge first and second
        let left = head;
        let right = prev;
        while (right) {
            const nextLeft = left.next;
            const nextRight = right.next;
            left.next = right;
            right.next = nextLeft;
            left = nextLeft;
            right = nextRight;
        }
    }
}
