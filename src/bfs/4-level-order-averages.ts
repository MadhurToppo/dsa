import TreeNode from "@common/tree.node";

export function levelOrderAverages(root: TreeNode): Array<number> {
  const result: Array<number> = [];
  if (root === null) {
    return result;
  }

  const queue: Array<TreeNode> = [];
  queue.push(root);

  while (queue.length > 0) {
    const levelSize: number = queue.length;
    let sum = 0;

    for (let i = 0; i < levelSize; i++) {
      const currentNode: TreeNode | undefined = queue.shift();
      sum += currentNode!.val;
      if (currentNode!.left !== null) {
        queue.push(currentNode!.left);
      }
      if (currentNode!.right !== null) {
        queue.push(currentNode!.right);
      }
    }

    result.push(sum / levelSize);
  }

  return result;
}
