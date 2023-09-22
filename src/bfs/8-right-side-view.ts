import TreeNode from "@common/tree.node";

export function getRightSideView(root: TreeNode): Array<number> {
  const result: Array<number> = [];
  if (root === null) {
    return result;
  }

  const queue: Array<TreeNode> = [];
  queue.push(root);

  while (queue.length > 0) {
    const levelSize: number = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode: TreeNode | undefined = queue.shift();
      if (i === levelSize - 1) {
        result.push(currentNode!.val);
      }
      if (currentNode!.left !== null) {
        queue.push(currentNode!.left);
      }
      if (currentNode!.right !== null) {
        queue.push(currentNode!.right);
      }
    }
  }

  return result;
}
