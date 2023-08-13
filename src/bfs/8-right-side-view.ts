import TreeNode from "./tree.node";

const getRightSideView = (root: TreeNode): Array<number> => {
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
};

// Test cases
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
console.log(getRightSideView(root));
