import TreeNode from "../common/tree.node";

export function invertTree(root: TreeNode | null): TreeNode {
  if (!root) {
    return new TreeNode(0);
  }
  let temp = root.right;
  root.right = root.left;
  root.left = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}
