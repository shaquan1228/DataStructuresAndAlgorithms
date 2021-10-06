/**
 * Cracking the Coding Interview
 * Page 110
 * Challenge 4.8
 *
 * PROMPT: Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree.
 * Avoid storing additional nodes in a data structure.
 */

const BinaryTree = require('../DataStructures/BinaryTree.js');

/**
 * 
 * @param {Binary Tree} binaryTree 
 * @param {Any Type} nodeA 
 * @param {Any Type} nodeB 
 * @returns {Node} first common ancestor
 */
function firstCommonAncestor(binaryTree, nodeA, nodeB) {
    let commonAncestor = binaryTree.root;
    let currentNode = binaryTree.root;


    while (currentNode !== null) {

        //Checks whether nodeA and nodeB are children of each other.
        //This is important because if A and B are immediately linked, we will update our common ancestor
        //and continue running our while loop.
        if (currentNode.data === nodeA
            && (currentNode.left.data == nodeB || currentNode.right.data === nodeB))
            return commonAncestor
        else if (currentNode.data === nodeB
            && (currentNode.left.data === nodeA || currentNode.right.right === nodeA))
            return commonAncestor


        //Check whether nodeA and nodeB are on the left hand side of the tree from the current node.
        nodeAisLeftAncestor = isAncestor(currentNode.left, nodeA);
        nodeBisLeftAncestor = isAncestor(currentNode.left, nodeB)

        //Check whether nodeA and nodeB are on the right hand side of the tree from the current node.
        nodeAisRightAncestor = isAncestor(currentNode.right, nodeA);
        nodeBisRightAncestor = isAncestor(currentNode.right, nodeB);


        //If nodeA and nodeB are not on the same side ot the tree starting from the current node, stop.
        if (nodeAisLeftAncestor && nodeBisRightAncestor)
            return commonAncestor
        else if (nodeAisRightAncestor && nodeBisLeftAncestor)
            return commonAncestor

        //If nodeA and nodeB are on the same side of the tree from the current node... update
        //common ancestor and check again until we should stop at the case above.
        else if (currentNode.right && nodeAisRightAncestor && nodeBisRightAncestor) {
            commonAncestor = currentNode.right;
            currentNode = currentNode.right;
        }
        else if (currentNode.left) {
            commonAncestor = currentNode.left;
            currentNode = currentNode.left
        }

        //If all else fails, stop.
        else
            return commonAncestor
    }
    return commonAncestor


}

/**
 * 
 * @param {Node} currentNode 
 * @param {Any Type} node one of the two nodes in question - either nodeA or nodeB
 * @returns 
 */
function isAncestor(currentNode, node) {
    if (currentNode !== null) {
        if (currentNode.data === node)
            return true;
        else if (currentNode.left && currentNode.left.data === node)
            return true;
        else if (currentNode.right && currentNode.right.data === node)
            return true;
        else if (currentNode.left)
            return isAncestor(currentNode.left, node)
        else if (currentNode.right)
            return isAncestor(currentNode.right, node)
    }
    return false

}

module.exports = firstCommonAncestor;