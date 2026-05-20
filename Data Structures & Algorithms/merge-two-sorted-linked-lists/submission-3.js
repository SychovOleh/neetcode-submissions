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
        if ((!list1 || list1.val === null) && (!list2 || list2.val === null)) {
            return null
        }
        if (!list1 || list1.val === null) {
            return list2;
        }
        if (!list2 || list2.val === null) {
            return list1;
        }
        
        const dummy = new ListNode();
        let n1 = list1;
        let n2 = list2;
        let node = dummy;
        while (n1 && n2) {
            if (n1.val < n2.val) {
                node.next = n1;
                node = node.next;
                n1 = n1.next;
            } else {
                node.next = n2;
                node = node.next;
                n2 = n2.next;
            }
        }

        if (n1) {
            node.next = n1;
        } else {
            node.next = n2;
        }

        return dummy.next;
    }
}
