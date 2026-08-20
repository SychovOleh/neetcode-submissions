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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) {
            return null;
        }
        let lHead = lists[0];
        for (let i = 1; i < lists.length; i++) {
            const rHead = lists[i];
            if (rHead.val < lHead.val) {
                lists[i] = rHead.next;
                rHead.next = lHead;
                lHead = rHead;
            }
        }
        const dummy = new ListNode();
        for (let i = 1; i < lists.length; i++) {
            let lPrev = dummy;
            let l = lists[0];
            dummy.next = l;
            let r = lists[i];
            while (r && l) {
                if (l.val > r.val) {
                    const rNext = r.next;
                    lPrev.next = r;
                    r.next = l;
                    r = rNext;
                } else {
                    lPrev = l;
                    l = l.next;
                }
            }
            if (r) {
                lPrev.next = r;
            }
        }
        return lHead;
    }
}
