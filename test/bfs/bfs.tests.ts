import { expect } from "chai";
import { levelOrderTraversal } from "@bfs/1-level-order-traversal";
import { reverseLevelOrderTraversal } from "@bfs/2-reverse-level-order-traversal";
import { levelOrderZigzagTraversal } from "@bfs/3-level-order-zigzag-traversal";
import { levelOrderAverages } from "@bfs/4-level-order-averages";
import { minDepthRootToLeaf } from "@bfs/5-minimum-depth-root-to-leaf";
import TreeNode from "@common/tree.node";
import { maxDepthTree } from "@bfs/6-max-depth-tree";

describe("BFS tests", function() {
  let root = new TreeNode(12);
  beforeEach(function() {
    if (
      this.currentTest?.title ===
      "should traverse binary tree and calculate maximum depth"
    ) {
      return;
    }
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
  });
  context("level order traversal", function() {
    it("should traverse binary tree levels from top to botton", function() {
      expect(levelOrderTraversal(root)).to.deep.equal([
        [12],
        [7, 1],
        [9, 10, 5],
      ]);
    });
  });
  context("reverse level order traversal", function() {
    it("should traverse binary tree levels from bottom to top", function() {
      expect(reverseLevelOrderTraversal(root)).to.deep.equal([
        [9, 10, 5],
        [7, 1],
        [12],
      ]);
    });
  });
  context("level order zigzag traversal", function() {
    it("should traverse binary tree levels zigzag from top to bottom", function() {
      expect(levelOrderZigzagTraversal(root)).to.deep.equal([
        [12],
        [1, 7],
        [9, 10, 5],
      ]);
    });
  });
  context("level order averages", function() {
    it("should traverse binary tree and calculate averages each level", function() {
      expect(levelOrderAverages(root)).to.deep.equal([12, 4, 8]);
    });
  });
  context("minimum depth root to leaf", function() {
    it("should traverse binary tree and calculate minimum depth", function() {
      expect(minDepthRootToLeaf(root)).to.equal(3);
    });
  });
  context("maximum depth tree", function() {
    it("should traverse binary tree and calculate maximum depth", function() {
      root = new TreeNode(12);
      root.left = new TreeNode(7);
      root.right = new TreeNode(1);
      root.right.left = new TreeNode(10);
      root.right.right = new TreeNode(5);
      expect(maxDepthTree(root)).to.equal(3);
      root.left.left = new TreeNode(9);
      root.right.left.left = new TreeNode(11);
      expect(maxDepthTree(root)).to.equal(4);
    });
  });
});
