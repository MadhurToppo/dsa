import TreeNode from "@common/tree.node";

export function maxDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}
