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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let dummy = new ListNode (0 , head);
    let pre = dummy;
    let fast = head.next;

    let flag = false;
    while(fast){
        if(pre.next.val === fast.val){
            fast = fast.next;
            flag = true;
        }else{
            if(flag){
                pre.next = fast;
                fast = fast.next;
                flag = false;
            }else{
                pre = pre.next;
                fast = fast.next;
            }
        }
    }
    if(flag){
        pre.next = null;
    }
    return dummy.next;
};