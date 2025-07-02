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

function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;

    return 1+ Math.max(maxDepth(root.left),maxDepth(root.right));
};

function maxDepthIter(root: TreeNode | null): number {
    if(!root) return 0;

    const stack:[TreeNode,number][] = [[root,1]];
    let max = 0;

    while(stack.length){
        const [node, depth] = stack.pop()!;
        if(depth > max) max = depth;

        if(node.left) stack.push([node.left,depth+1]);
        if(node.right) stack.push([node.right,depth+1]);
    }
    return max;
};
