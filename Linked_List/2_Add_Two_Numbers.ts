/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let res = new ListNode();
    let head = res;
    let carry = 0;

    while(l1 || l2 ||carry){
        let sum = carry;
        carry = 0;
        if(l1){
            sum+=l1.val;
            l1 = l1.next;
        }
        if(l2){
            sum+=l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum-=10;
        }
        res.next = new ListNode(sum);
        res = res.next;
    }
    return head.next;
};