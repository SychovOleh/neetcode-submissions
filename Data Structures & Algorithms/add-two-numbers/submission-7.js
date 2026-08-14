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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode();
        let cur = dummy;
        let leftover = 0;
        while (l1 || l2 || leftover) {
            const v1 = l1 ? l1.val : 0;
            const v2 = l2 ? l2.val : 0;
            const sum = v1 + v2 + leftover;
            if (sum > 9) {
                cur.next = new ListNode(sum - 10);
                leftover = 1;
            } else {
                cur.next = new ListNode(sum);
                leftover = 0;
            }
            cur = cur.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        // while (l1) {
        //     const sum = l1.val + leftover;
        //     if (sum > 9) {
        //         cur.next = new ListNode(sum - 10);
        //         leftover = 1;
        //     } else {
        //         cur.next = new ListNode(sum);
        //         leftover = 0;
        //     }
        //     cur = cur.next;
        //     l1 = l1.next;
        // }
        // while (l2) {
        //     const sum = l2.val + leftover;
        //     if (sum > 9) {
        //         cur.next = new ListNode(sum - 10);
        //         leftover = 1;
        //     } else {
        //         cur.next = new ListNode(sum);
        //         leftover = 0;
        //     }
        //     cur = cur.next;
        //     l2 = l2.next;
        // }
        // if (leftover) {
        //     cur.next = new ListNode(1)
        // }
        return dummy.next;
    }
}
