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
        if (!lists || lists.length === 0) return null;
        while (lists && lists.length > 1) {
            const mergedList = [];
            for (let i = 0; i < lists.length; i += 2) {
                let l = lists[i];
                let r = lists[i + 1];
                if (!r) {
                    // if (l) {
                        mergedList.push(l)
                    // }
                    break;
                }
                // merge
                const dummy = new ListNode();
                dummy.next = l;
                let prevL = dummy;
                while (l && r) {
                    if (l.val > r.val) {
                        const rNext = r.next;
                        prevL.next = r;
                        r.next = l;
                        prevL = r;
                        r = rNext;
                    } else {
                        prevL = l;
                        l = l.next;
                    }
                }
                if (r) {
                    prevL.next = r;
                }
                mergedList.push(dummy.next);
            }
            lists = mergedList;
        }
        return lists[0] || null;
    }
}
