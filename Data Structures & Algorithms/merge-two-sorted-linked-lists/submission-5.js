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
        if (!list1) return list2;
        if (!list2) return list1;
        let n1 = list1;
        let n2 = list2;
        let n3 = null;
        let head = null;
        while(n1 && n2)  {
            if (!n3) {
                if (n2.val <= n1.val) {
                    n3 = n2;
                    n2 = n2.next;
                } else {
                    n3 = n1;
                    n1 = n1.next;
                }
                head = n3;
                continue;
            }
            if (n2.val <= n1.val) {
                n3.next = n2;
                n2 = n2.next;
            } else {
                n3.next = n1;
                n1 = n1.next;
            }
            n3 = n3.next;
        }

        while (!n1 && n2) {
            n3.next = n2;
            n2 = n2.next;
            n3 = n3.next;
        }
        while (n1 && !n2) {
            n3.next = n1;
            n1 = n1.next;
            n3 = n3.next;
        }

        return head;
    }
}