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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let dummy = new ListNode( 0, head);
    let count = 0;
    let slow = dummy;
    let fast = head;
    //get the len
    while(fast){
        count++;
        fast = fast.next;
    }
    let time = Math.floor(count/k);
    if(time === 0) return head;

    let arr =[];
    fast = head;
    while(time>0){
        for(let i = 0; i < k; i++){
            arr.push(fast);
            fast = fast.next;
        }
        for(let i = 0; i < k; i++){
            slow.next = arr.pop();
            slow = slow.next;
        }
        time--;
    }
    slow.next =fast;

    return dummy.next;
};