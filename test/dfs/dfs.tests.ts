import { expect } from "chai";
import { levelOrderTraversal } from "@bfs/1-level-order-traversal";
import { maxDepth } from "@dfs/1-max-depth";
import { invertTree } from "@dfs/2-invert-binary-tree";
import { hasPath } from "@dfs/3-binary-tree-path-sum";
import { findPaths } from "@dfs/4-all-paths-for-sum";
import TreeNode from "@common/tree.node";

describe("DFS tests", function () {
  const root = new TreeNode(12);
  beforeEach(function () {
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
  });
  context("max depth of tree", function () {
    it("should find the depth of deepest leaf", function () {
      expect(maxDepth(root)).to.equal(3);
    });
  });
  context("invert binary tree", function () {
    it("should invert nodes from left to right", function () {
      const inverted = invertTree(root);
      expect(levelOrderTraversal(inverted)).to.deep.equal([
        [12],
        [1, 7],
        [5, 10, 9],
      ]);
    });
  });
  context("binary tree path sum", function () {
    it("should find if for a given sum path exists from root to node", function () {
      expect(hasPath(root, 23)).to.equal(true);
      expect(hasPath(root, 16)).to.equal(false);
    });
  });
  context("all paths for sum", function () {
    it("should find all paths for a given sum", function () {
      expect(findPaths(root, 23)).to.deep.equal([[12, 1, 10]]);
    });
  });
});
