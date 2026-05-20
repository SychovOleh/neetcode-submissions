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
        // divide lists
        // reverse 2nd list
        // merge both

        // 1, 2, 3, 4

        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        // 1 -> 2 -> 3
        // 2 -> 3 / 1
        // 3 / 2 -> 1
        let ordered = slow.next;
        slow.next = null; // stopper for reverse
        let reversed = null;
        while (ordered) {
            const next = ordered.next;
            ordered.next = reversed;
            reversed = ordered;
            ordered = next;
        }

        let cur = head;
        let next = reversed;
        while (next) {
            const nextHead = cur.next; 
            const nextReverse = next.next; 
            cur.next = next;
            next.next = nextHead;
            cur = nextHead;
            next = nextReverse;
        }
    }
}
