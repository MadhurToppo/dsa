import TreeNode from "@common/tree.node";

function maxDepthTree(root: TreeNode): number {
  if (root === null) {
    return 0;
  }

  const queue: Array<TreeNode> = new Array();
  queue.push(root);
  let maxDepth = 0;

  while (queue.length > 0) {
    maxDepth++;
    const levelSize: number = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode: TreeNode | undefined = queue.shift();
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

// Test cases
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(maxDepthTree(root));
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(maxDepthTree(root));
