import TreeNode from "../common/tree.node";

export function maxDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}
