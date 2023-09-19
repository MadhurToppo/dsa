import { expect } from "chai";
import { levelOrderTraversal } from "@bfs/1-level-order-traversal";
import { reverseLevelOrderTraversal } from "@bfs/2-reverse-level-order-traversal";
import { levelOrderZigzagTraversal } from "@bfs/3-level-order-zigzag-traversal";
import { levelOrderAverages } from "@bfs/4-level-order-averages";
import { minDepthRootToLeaf } from "@bfs/5-minimum-depth-root-to-leaf";
import { maxDepthTree } from "@bfs/6-max-depth-tree";
import { levelOrderSuccessor } from "@bfs/7-level-order-successor";
import { getRightSideView } from "@bfs/8-right-side-view";
import TreeNode from "@common/tree.node";

describe("BFS tests", function () {
  let root = new TreeNode(12);
  beforeEach(function () {
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
  context("level order averages", function () {
    it("should traverse binary tree and calculate averages each level", function () {
      expect(levelOrderAverages(root)).to.deep.equal([12, 4, 8]);
    });
  });
  context("minimum depth root to leaf", function () {
    it("should traverse binary tree and calculate minimum depth", function () {
      expect(minDepthRootToLeaf(root)).to.equal(3);
    });
  });
  context("maximum depth tree", function () {
    it("should traverse binary tree and calculate maximum depth", function () {
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
  context("level order successor", function () {
    it("should find next node in level order of a binary tree", function () {
      expect(levelOrderSuccessor(root, 9)?.val).to.equal(10);
      expect(levelOrderSuccessor(root, 12)?.val).to.equal(7);
      expect(levelOrderSuccessor(root, 10)?.val).to.equal(5);
    });
  });
  context("right side view", function () {
    it("should find the right view of the binary tree", function () {
      expect(getRightSideView(root)).to.deep.equal([12, 1, 5]);
    });
  });
});
