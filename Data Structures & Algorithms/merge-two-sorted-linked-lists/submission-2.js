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
        let next1 = list1; // 1, 2, 4
        let next2 = list2; // 1, 3,     5
        let head = null; // 1
        let cur = null; // 1, 1
        while (next1 !== null && next2 !== null) {
            if (next1.val < next2.val) {
                if (cur) {
                    cur.next = next1; // 1, 2, 4
                }
                cur = next1; // 1, 2, 4
                next1 = next1.next; // 2, 4, null
            } else {
                if (cur) {
                    cur.next = next2;
                }
                cur = next2; // 1
                next2 = next2.next; // 3
            }
            
            if (!head) {
                head = cur; // 1
            }
        }
        
        if (next1) {
            if (!head) {
                return next1;
            }
            cur.next = next1;  
        }
        
        if (next2) {
            if (!head) {
                return next2;
            }
            cur.next = next2;
        }
        
        return head;
    }
}
