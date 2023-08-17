import TreeNode from "../common/tree.node";

function levelOrderAverages(root: TreeNode): Array<number> {
  let result: Array<number> = new Array();
  if (root === null) {
    return result;
  }

  const queue: Array<TreeNode> = new Array();
  queue.push(root);

  while (queue.length > 0) {
    const levelSize: number = queue.length;
    let sum = 0;

    for (let i = 0; i < levelSize; i++) {
      let currentNode: TreeNode | undefined = queue.shift();
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

// Test cases
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(levelOrderAverages(root));
