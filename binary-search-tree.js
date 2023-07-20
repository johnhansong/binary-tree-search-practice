// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode=this.root) {
    const newLeaf = new TreeNode(val, currentNode)

    if (!this.root) {
      this.root = newLeaf;
      return;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newLeaf;
      } else {
        this.insert(val, currentNode.left)
      }
    }

    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = newLeaf;
      } else {
        this.insert(val, currentNode.right)
      }
    }
  }


  search(val) {
    let currNode = this.root

    while (currNode.val !== val) {

      if (val < currNode.val) {
        currNode = currNode.left
      } else {
        currNode = currNode.right
      }

      if (!currNode) return false;
    }
    return true;
  }


  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    console.log(currentNode.val)
    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right)
  }


  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left)
    console.log(currentNode.val)
    this.inOrderTraversal(currentNode.right)
  }


  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.postOrderTraversal(currentNode.left)
    this.postOrderTraversal(currentNode.right)
    console.log(currentNode.val)
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let queue = [this.root];

    while (queue.length > 0) {
      let currentNode = queue.shift();

      console.log(currentNode.val)
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let stack = [this.root]

    while (stack.length > 0) {
      let currentNode = stack.pop()

      console.log(currentNode.val)
      if (currentNode.left) stack.push(currentNode.left)
      if (currentNode.right) stack.push(currentNode.right)
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
