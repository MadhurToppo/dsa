import TreeNode from "@common/tree.node";

export function levelOrderTraversal(
  root: TreeNode | null,
): Array<Array<number>> {
  let result: Array<Array<number>> = new Array();
  if (root === null) {
    return result;
  }

  const queue: Array<TreeNode> = new Array();
  queue.push(root);

  while (queue.length > 0) {
    const levelSize: number = queue.length;
    let currentLevel: Array<number> = new Array();

    for (let i = 0; i < levelSize; i++) {
      let currentNode: TreeNode | undefined = queue.shift();
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
