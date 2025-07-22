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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if( !head || left ===right) return head;

    const dummy = new ListNode(0, head);
    let prep = dummy;

    for(let i =1; i<left; ++i){
        prep = prep.next;
    }

    let cur =prep.next;
    for(let i=0; i< right-left;++i){
        const tmp = cur.next;
        cur.next = tmp.next;
        tmp.next = prep.next;
        prep.next = tmp;
    }

    return dummy.next;
};