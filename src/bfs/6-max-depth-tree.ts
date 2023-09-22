import TreeNode from "@common/tree.node";

export function maxDepthTree(root: TreeNode): number {
  if (root === null) {
    return 0;
  }

  const queue: Array<TreeNode> = [];
  queue.push(root);
  let maxDepth = 0;

  while (queue.length > 0) {
    maxDepth++;
    const levelSize: number = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode: TreeNode | undefined = queue.shift();
      if (currentNode!.left !== null) {
        queue.push(currentNode!.left);
      }
      if (currentNode!.right !== null) {
        queue.push(currentNode!.right);
      }
    }
  }
  return maxDepth;
}
