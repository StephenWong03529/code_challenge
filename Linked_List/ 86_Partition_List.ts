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

function partition(head: ListNode | null, x: number): ListNode | null {
    if(!head||head.next===null) return head;
    let dummy = new ListNode(0, head);
    let list = new ListNode(0,null);
    let slow = dummy;
    let fast = head;
    let tmp = list;

    while(fast){
        if(fast.val >= x){
            tmp.next = fast;
            tmp = tmp.next;

        }else{
            slow.next = fast;
            slow = slow.next;
        }
        fast = fast.next;
    }
    tmp.next = null;
    if(tmp){
        slow.next = list.next;
    }
    return dummy.next;
};