import { expect } from "chai";
import { levelOrderTraversal } from "@bfs/1-level-order-traversal";
import { reverseLevelOrderTraversal } from "@bfs/2-reverse-level-order-traversal";
import { levelOrderZigzagTraversal } from "@bfs/3-level-order-zigzag-traversal";
import TreeNode from "@common/tree.node";

describe("BFS tests", function () {
  const root = new TreeNode(12);
  before(function () {
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
  });
  context("level order traversal", function () {
    it("should traverse binary tree levels from top to botton", function () {
      expect(levelOrderTraversal(root)).to.deep.equal([
        [12],
        [7, 1],
        [9, 10, 5],
      ]);
    });
  });
  context("reverse level order traversal", function () {
    it("should traverse binary tree levels from bottom to top", function () {
      expect(reverseLevelOrderTraversal(root)).to.deep.equal([
        [9, 10, 5],
        [7, 1],
        [12],
      ]);
    });
  });
  context("level order zigzag traversal", function () {
    it("should traverse binary tree levels zigzag from top to bottom", function () {
      expect(levelOrderZigzagTraversal(root)).to.deep.equal([
        [12],
        [1, 7],
        [9, 10, 5],
      ]);
    });
  });
});
