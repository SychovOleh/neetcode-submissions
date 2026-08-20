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
        if (!lists || lists.length === 0) {
            return null;
        }
        let head = lists[0] ?? null;
        for (let i = 1; i < lists.length; i++) {
            const dummy = new ListNode();
            dummy.next = head;
            let lPrev = dummy;
            let l = head;
            let r = lists[i];
            while (r && l) {
                if (l.val > r.val) {
                    const rNext = r.next;
                    lPrev.next = r;
                    r.next = l;
                    lPrev = r;
                    r = rNext;
                } else {
                    lPrev = l;
                    l = l.next;
                }
            }
            if (r) {
                lPrev.next = r;
            }
            head = dummy.next;
        }
        return head;
    }
}
