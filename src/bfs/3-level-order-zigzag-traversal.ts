import TreeNode from "../common/tree.node";

function levelOrderZigzagTraversal(root: TreeNode): Array<Array<number>> {
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

// Test cases
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(levelOrderZigzagTraversal(root));
