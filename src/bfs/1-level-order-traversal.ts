import TreeNode from "@common/tree.node";

export function levelOrderTraversal(
  root: TreeNode | null,
): Array<Array<number>> {
  const result: Array<Array<number>> = [];
  if (root === null) {
    return result;
  }

  const queue: Array<TreeNode> = [];
  queue.push(root);

  while (queue.length > 0) {
    const levelSize: number = queue.length;
    const currentLevel: Array<number> = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode: TreeNode | undefined = queue.shift();
      currentLevel.push(currentNode!.val);
      if (currentNode!.left !== null) {
        queue.push(currentNode!.left);
      }
      if (currentNode!.right !== null) {
        queue.push(currentNode!.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
}
