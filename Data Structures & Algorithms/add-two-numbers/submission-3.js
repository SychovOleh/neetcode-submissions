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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const stringifiedNum = `${this.count(this.reverse(l1)) + this.count(this.reverse(l2))}`;
        // return new ListNode(Number(stringifiedNum))
        // 9 7 5

        let prev = new ListNode(Number(stringifiedNum.at(0))); // 5, 7
        for (let i = 1; i < stringifiedNum.length; i++) {
            const cur = new ListNode(Number(stringifiedNum.at(i))); // 7, 9
            cur.next = prev // 7.n = 5, 9.n = 7
            prev = cur // 7,
        }
        // let prev = new ListNode(Number(stringifiedNum.at(-1))); // 5, 7
        // for (let i = stringifiedNum.length - 2; i >= 0; i--) {
        //     const cur = new ListNode(Number(stringifiedNum.at(i))); // 7, 9
        //     cur.next = prev // 7.n = 5, 9.n = 7
        //     prev = cur // 7,
        // }
        return prev;
    }

    reverse(head) {
        let reverse = null;
        let cur = head;
        while (cur) {
            const next = cur.next;
            cur.next = reverse
            reverse = cur;
            cur = next;
        }

        return reverse;
    }

    count(head) {
        let res = '';
        let cur = head;
        while (cur) {
            res = res + cur.val;
            cur = cur.next;
        }

        return Number(res);
    }
}
