import TreeNode from "./tree.node";

const levelOrderSuccessor = (root: TreeNode, key: number) => {
  if (root === null) {
    return null;
  }

  const queue: Array<TreeNode> = new Array();
  queue.push(root);

  while (queue.length > 0) {
    let currentNode: TreeNode | undefined = queue.shift();
    if (currentNode!.left !== null) {
      queue.push(currentNode!.left);
    }
    if (currentNode!.right !== null) {
      queue.push(currentNode!.right);
    }
    if (currentNode?.val === key) {
      break;
    }
  }

  if (queue.length > 0) {
    return queue[0];
  }
  return null;
};

// Test cases
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

let result = levelOrderSuccessor(root, 3);
if (result) {
  console.log(result.val);
}

root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

result = levelOrderSuccessor(root, 9);
if (result) {
  console.log(result.val);
}

result = levelOrderSuccessor(root, 12);
if (result) {
  console.log(result.val);
}
