var BTSLibrary = require("./../Algos/BinaryTreeSearch.js");

/**
 * Initializes a Node when given data.
 * @param {Any Type} data or null
 */
var Node = function (data) {
  data = data || null;
  this.data = data;
  this.left = null;
  this.right = null;
};

/**
 * Initializes a Binary Min Heap data structure.
 * @param {Any Type} data or null
 */
var BinaryHeap = function (data) {
  data = data || null;
  this.root = null;
  if (data !== null) this.insert(data);
};

/**
 * Instantiates a node from Any Type of data and appends it to a Binary Heap.
 * Leaf nodes are appended to to the left first.
 * @param {Any Type} data
 */
BinaryHeap.prototype.insert = function (data) {
  let newNode = new Node(data);
  if (this.root === null) this.root = newNode;
  else {
    this.recursivelyInsert(this.root, newNode);

    this.fixTree(this.root, newNode);
  }
};
/**
 * 
 * @param {Node} currentNode A node in the Binary Heap.
 * @param {Node} insertedNode A node that we'd like to compare our current node to.
 * @return {function}
 */

BinaryHeap.prototype.fixTree = function (currentNode, insertedNode) {
  if (currentNode !== null) {
    if (
      currentNode.left !== null &&
      currentNode.left.data === insertedNode.data
    ) {
      if (currentNode.data > insertedNode.data) {
        let tmp = currentNode.data;
        currentNode.data = insertedNode.data;
        insertedNode.data = tmp;

        return this.fixTree(this.root, currentNode);
      }
    } else if (
      currentNode.right !== null &&
      currentNode.right.data === insertedNode.data
    ) {
      if (currentNode.data > insertedNode.data) {
        let tmp = currentNode.data;
        currentNode.data = insertedNode.data;
        insertedNode.data = tmp;

        return this.fixTree(this.root, currentNode);
      }
    } else if (currentNode.left !== null)
      return this.fixTree(currentNode.left, insertedNode);
    else if (currentNode.right !== null) {
      return this.fixTree(currentNode.right, insertedNode);
    }
  }
};
/**
 * 
 * @param {Node} node  A node in the Binary Heap.
 * @param {Node} newNode  A node that's will be inserted into the Binary Heap.
 */
BinaryHeap.prototype.recursivelyInsert = function (node, newNode) {
  if (node.left === null) return (node.left = newNode);
  else if (node.right === null) return (node.right = newNode);
  else if (node.left.right === null || node.left.left === null)
    return this.recursivelyInsert(node.left, newNode);
  else if (node.right.right === null || node.right.left === null)
    return this.recursivelyInsert(node.right, newNode);
  else if (node.data < newNode.data)
    return this.recursivelyInsert(node.right, newNode);
  else return this.recursivelyInsert(node.left, newNode);
};

/**
 * The minimum value is extracted from the Binary Heap. Then, the tree is fixed to remain a Binary Min Heap.
 * @return Minimum value in the Binary Heap
 */
BinaryHeap.prototype.extractMin = function () {
  let returnValue = this.root;

  //Find rightmost child and put set it as the root.
  //In this step, you must also make sure you remove the Node link to the last child.
  let currentNode = this.root;
  while (currentNode.left !== null || currentNode.right !== null)
    if (currentNode.right !== null) {
      if (currentNode.right.left === null && currentNode.right.left === null) {
        let tmp = currentNode;
        currentNode = currentNode.right;
        tmp.right = null;
      } else currentNode = currentNode.right;
    } else if (currentNode.left !== null)
      if (currentNode.left.left === null && currentNode.left.left === null) {
        let tmp = currentNode;
        currentNode = currentNode.left;
        tmp.left = null;
      } else currentNode = currentNode.left;

  //Updating the root's links
  this.root = currentNode;
  this.root.left = returnValue.left;
  this.root.right = returnValue.right;

  //Now I will find the min node
  var minNode = this.root;
  let findMin = function (currentNode) {
    if (currentNode.data < minNode.data) minNode = currentNode;
  };
  //And fix the tree by replacing root with the current minimum.
  BTSLibrary.inOrderTraversal(this.root, findMin);
  this.fixTree(this.root, minNode);

  return returnValue;
};




module.exports = BinaryHeap;
