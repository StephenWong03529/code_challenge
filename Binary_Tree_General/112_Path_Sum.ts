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

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// recursion Time: O(n), space: O(H), H=longest root-to-leaf path
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if(!root) return false;
  
    if(!root.left && !root.right) return targetSum === root.val;

    const next = targetSum - root.val;

    return hasPathSum(root.left, next) || hasPathSum(root.right, next);
};

// iterative time: O(n), space: average O(H), worst O(n)
function hasPathSumIter(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  const stack: Array<[TreeNode, number]> = [[root, targetSum - root.val]];

  while (stack.length) {
    const [node, rem] = stack.pop()!;

    // Leaf check
    if (!node.left && !node.right && rem === 0) return true;

    if (node.left)  stack.push([node.left,  rem - node.left.val]);
    if (node.right) stack.push([node.right, rem - node.right.val]);
  }
  return false;
}