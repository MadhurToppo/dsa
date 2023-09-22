import TreeNode from "@common/tree.node";

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  const temp = root.right;
  root.right = root.left;
  root.left = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}
