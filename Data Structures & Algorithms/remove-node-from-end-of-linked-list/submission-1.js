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
        // base case: middle node +
        // first node +
        // last node + 
        // one node +
        head = { val: 0, next: head };
        // 0, 1, 2, 3 | 2
        // 0, 1, 2 | 2
        // 0, 1, 2 | 1
        // 0, 1 | 1
        let i = 0;
        let slow = head;
        let fast = head;
        
        while (true) {
            if (n === 1 && fast === null) {
                break;
            }
            if (i >= n) {
                if (fast.next === null) {
                    slow.next = slow.next.next;
                    break
                }
                slow = slow.next;
            }
            fast = fast.next;
            i++;
        }

        return head.next;
    }
}
