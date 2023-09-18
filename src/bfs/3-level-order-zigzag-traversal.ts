import TreeNode from "@common/tree.node";

export function levelOrderZigzagTraversal(
  root: TreeNode,
): Array<Array<number>> {
  let result: Array<Array<number>> = new Array();
  if (root === null) {
    return result;
  }

  const queue: Array<TreeNode> = new Array();
  queue.push(root);
  let leftToRight: boolean = true;
  while (queue.length > 0) {
    const levelSize: number = queue.length;
    let currentLevel: Array<number> = new Array();

    for (let i = 0; i < levelSize; i++) {
      let currentNode: TreeNode | undefined = queue.shift();

      if (leftToRight) {
        currentLevel.push(currentNode!.val);
      } else {
        currentLevel.unshift(currentNode!.val);
      }
      if (currentNode!.left !== null) {
        queue.push(currentNode!.left);
      }
      if (currentNode!.right !== null) {
        queue.push(currentNode!.right);
      }
    }

    result.push(currentLevel);
    leftToRight = !leftToRight;
  }

  return result;
}
