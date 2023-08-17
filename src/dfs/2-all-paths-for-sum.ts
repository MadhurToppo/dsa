import TreeNode from "../common/tree.node";

function find_paths(root: TreeNode, sum: number): Array<Array<number>> {
  let result: Array<Array<number>> = [];
  find_paths_recursive(root, sum, [], result);
  return result;
}

function find_paths_recursive(
  current: TreeNode | null,
  sum: number,
  path: any[],
  all: Array<Array<number>>,
): void {
  if (current === null) {
    return;
  }

  path.push(current.val);

  if (current.val === sum && current.left === null && current.right === null) {
    all.push([...path]);
  } else {
    find_paths_recursive(current.left, sum - current.val, path, all);
    find_paths_recursive(current.right, sum - current.val, path, all);
  }
  path.pop();
}

// Testcases
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(find_paths(root, 23));
