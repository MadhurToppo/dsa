import TreeNode from "@common/tree.node";

export function minDepthRootToLeaf(root: TreeNode): number {
  if (root === null) {
    return 0;
  }

  const queue: Array<TreeNode> = new Array();
  queue.push(root);
  let minDepth = 0;

  while (queue.length > 0) {
    minDepth++;
    const levelSize: number = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode: TreeNode | undefined = queue.shift();
      if (currentNode?.left === null && currentNode.right === null) {
        return minDepth;
      }
      if (currentNode!.left !== null) {
        queue.push(currentNode!.left);
      }
      if (currentNode!.right !== null) {
        queue.push(currentNode!.right);
      }
    }
  }
  return minDepth;
}
