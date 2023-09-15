import { expect } from "chai";
import { levelOrderTraversal } from "@bfs/1-level-order-traversal";
import TreeNode from "@common/tree.node";

describe("BFS tests", function() {
  context("level Order Traversal", function() {
    it("should traverse the binary tree level by level", function() {
      const root = new TreeNode(12);
      root.left = new TreeNode(7);
      root.right = new TreeNode(1);
      root.left.left = new TreeNode(9);
      root.right.left = new TreeNode(10);
      root.right.right = new TreeNode(5);
      expect(levelOrderTraversal(root)).to.deep.equal([
        [12],
        [7, 1],
        [9, 10, 5],
      ]);
    });
  });
});
