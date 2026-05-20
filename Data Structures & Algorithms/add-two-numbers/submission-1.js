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
        l1 = this.reverse(l1);
        l2 = this.reverse(l2);
        const stringifiedNum = `${this.count(l1) + this.count(l2)}`;
        

        // let reverse = null;
        // let cur = new ListNode(Number(stringifiedNum.at(-1)));
        // for (let i = stringifiedNum.length - 2; i <= 0; i--) {
        //     const next = cur.next;
        //     cur.next = reverse
        //     reverse = cur;
        //     cur = next;
        // }

        // return reverse;

        const l3 = new ListNode(Number(stringifiedNum[0])); // todo: replace with l1
        // 1 2 3
        let cur = l3; // 1, 2
        for (let i = 1; i < stringifiedNum.length; i++) { // todo: reverse while creating
            cur.next = new ListNode(Number(stringifiedNum[i])) // 1.n = 2
            cur = cur.next
        }

        return this.reverse(l3)
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
