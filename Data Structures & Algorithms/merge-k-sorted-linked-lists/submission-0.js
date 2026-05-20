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
        if (lists.length < 1) {
            return null
        }
        while (lists.length > 1) {
            const merged = [];
            for (let i = 0; i < lists.length; i += 2) { // condition?
                const l1 = lists[i];
                const l2 = lists[i + 1];
                merged.push(this.mergeSortedLists(l1, l2));
            }
            lists = merged;
        }
        
        return lists[0];
    }

    mergeSortedLists(n1, n2) {
        if (!n2) {
            return n1;
        }

        const dummy = new ListNode();
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