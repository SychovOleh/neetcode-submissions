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
        let prevFollwer = null;
        let follower = head;
        let forward = head;
        let i = 1;
        while (forward.next) {
            if (i >= n) {
                prevFollwer = follower;
                follower = follower.next;
            } else {
                i++
            }
            forward = forward.next;
        }
        if (!prevFollwer) {
            return head.next;
        }
        prevFollwer.next = follower.next;
        return head;
    }
}
