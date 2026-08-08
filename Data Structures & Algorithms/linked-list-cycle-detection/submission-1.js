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
     * @return {boolean}
     */
    hasCycle(head) {
        let [s, f] = [head, head];
        let i = 0;
        while (f && f.next) {
            if (i !== 0 && s === f) {
                return true
            }
            s = s.next;
            f = f.next.next; 
            i++;
        }
        return false
    }
}
