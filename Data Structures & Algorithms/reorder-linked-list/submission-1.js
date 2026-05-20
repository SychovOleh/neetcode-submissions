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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        const reverseHead = slow.next;
        slow.next = null; // ?? need it? early stop
        
        let next = reverseHead;
        const stack = [];
        while(next) {
            stack.push(next);
            const tmpNext = next;
            next = next.next;
            tmpNext.next = null;// ?? need it? prevent infinite loop of deps
        }

        let node = head;
        while (node) {
            const tmpNode = node;
            node = node.next;
            const reverseNode = stack.pop();
            tmpNode.next = reverseNode;
            if (reverseNode) {
                reverseNode.next = node;
            } else {
                tmpNode.next = null
            }
        }
    }
}
