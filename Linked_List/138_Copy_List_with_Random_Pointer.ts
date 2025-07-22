/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    if( head ===null) return null;
    let map = new Map();
    let current = head;

    while(current){
        map.set(current, new Node(current.val,current.next,current.random));
        current = current.next;
    }

    map.forEach(node => {
        if( node.next) node.next = map.get(node.next);
        if( node.random) node.random = map.get(node.random);
    })

    return map.get(head);
    
};