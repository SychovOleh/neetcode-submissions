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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode();
        dummy.next = list1;
        let prev = dummy;
        while (list1 && list2) {
            if (list1.val > list2.val) {
                const next2 = list2.next;
                prev.next = list2;
                list2.next = list1;
                prev = list2;
                list2 = next2;
            } else {
                prev = list1;
                list1 = list1.next;
            }
        }
        if (list2) {
            prev.next = list2;
        }

        return dummy.next;
    }
}
