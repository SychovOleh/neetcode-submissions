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
        // one node +
        // first node
        // last node
        if (head.next === null && n === 1) {
            return null;
        }

        let total = 0;
        let cur = head;
        while (cur) {
            cur = cur.next;
            total++;
        }

        

        if (total === n) {
            return head.next;
        }

        let i = 0;
        let preDst = total - n - 1; // 3 - 2 = 0
        let node = head;
        while (true) {
            if (i === preDst) {
                node.next = node.next.next;
                break;
            }
            i++
            node = node.next;
        }
        return head
    }
}
