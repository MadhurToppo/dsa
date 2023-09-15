import { expect } from "chai";
import { levelOrderTraversal } from "@bfs/1-level-order-traversal";
import { invertTree } from "@dfs/invert-binary-tree";
import { maxDepth } from "@dfs/max-depth";
import TreeNode from "@common/tree.node";

describe("DFS tests", function() {
  const root = new TreeNode(12);
  before(function() {
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
  });
  context("invert binary tree", function() {
    it("should invert nodes from left to right", function() {
      const inverted = invertTree(root);
      expect(levelOrderTraversal(inverted)).to.deep.equal([
        [12],
        [1, 7],
        [5, 10, 9],
      ]);
    });
  });
  context("max depth of tree", function() {
    it("should find the depth of deepest leaf", function() {
      expect(maxDepth(root)).to.equal(3);
    });
  });
});
