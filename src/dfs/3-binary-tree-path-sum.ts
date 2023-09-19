import TreeNode from "@common/tree.node";

export function hasPath(root: TreeNode | null, sum: number): boolean {
  if (root === null) {
    return false;
  }

  if (root.val === sum && root.left === null && root.right === null) {
    return true;
  }

  return (
    hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)
  );
}
