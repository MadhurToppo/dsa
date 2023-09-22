import TreeNode from "@common/tree.node";

export function findPaths(root: TreeNode, sum: number): Array<Array<number>> {
  const result: Array<Array<number>> = [];
  findPathsRecursive(root, sum, [], result);
  return result;
}

function findPathsRecursive(
  current: TreeNode | null,
  sum: number,
  path: Array<number>,
  all: Array<Array<number>>,
): void {
  if (current === null) {
    return;
  }

  path.push(current.val);

  if (current.val === sum && current.left === null && current.right === null) {
    all.push([...path]);
  } else {
    findPathsRecursive(current.left, sum - current.val, path, all);
    findPathsRecursive(current.right, sum - current.val, path, all);
  }
  path.pop();
}
