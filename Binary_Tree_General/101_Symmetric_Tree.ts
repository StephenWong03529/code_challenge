/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
   if(!root) return true;

   const queue: (TreeNode| null)[] = [root.left, root.right];

   while(queue.length){
    const a = queue.shift()!;
    const b = queue.shift()!;

    if(!a && !b) continue;
    if(!a || !b|| a.val !== b.val) return false;
    queue.push(a.left,  b.right);
    queue.push(a.right, b.left);
   }
   return true;
};