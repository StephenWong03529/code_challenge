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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) return l2;
    if (!l2) return l1;

    let res = new ListNode(0);
    let head = res;
    while(l1 && l2){
        if( l1.val <= l2.val){
            res.next = l1;
            l1 = l1.next;
        }else{
            res.next = l2;
            l2 = l2.next;
        }
        res = res.next;
    }
    res.next = l1??l2;
    return head.next;
};