import TreeNode from "@common/tree.node";

export function getRightSideView(root: TreeNode): Array<number> {
  let result: Array<number> = new Array();
  if (root === null) {
    return result;
  }

  const queue: Array<TreeNode> = new Array();
  queue.push(root);

  while (queue.length > 0) {
    const levelSize: number = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode: TreeNode | undefined = queue.shift();
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
