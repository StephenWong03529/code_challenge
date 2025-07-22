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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(k===0 || !head) return head;
    let dummy = new ListNode(0,head);
    let slow = head;
    let fast = head;
    let cur = head;
    let count = 0;
    while(cur){
        cur = cur.next;
        count++;
    }
    let loop = k%count;
    while(loop>0){
        fast = fast.next;
        loop--;
    }

    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    let tmp = dummy.next;
    dummy.next = slow.next ?? dummy.next;
    fast.next = tmp;
    slow.next = null;
    return dummy.next;
};