import TreeNode from "@common/tree.node";

export function levelOrderSuccessor(
  root: TreeNode | null,
  key: number,
): TreeNode | null {
  if (root === null) {
    return null;
  }

  const queue: Array<TreeNode> = new Array();
  queue.push(root);

  while (queue.length > 0) {
    let currentNode: TreeNode | undefined = queue.shift();
    if (currentNode!.left !== null) {
      queue.push(currentNode!.left);
    }
    if (currentNode!.right !== null) {
      queue.push(currentNode!.right);
    }
    if (currentNode?.val === key) {
      break;
    }
  }

  if (queue.length > 0) {
    return queue[0];
  }
  return null;
}
