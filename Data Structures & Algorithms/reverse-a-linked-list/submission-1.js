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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null; // 1 -> 2
        let cur = head; // 2 -> 3
        while (cur !== null) {
            const tmpNext = cur.next; // 2.n=3 -> 3.n=null -> null
            cur.next = prev; // 1.n=null -> 2.n=1 -> 3.n=2
            prev = cur; // 1 -> 2 -> 3
            cur = tmpNext // 2 -> 3 -> null
        }
        
        return prev
    }
}
