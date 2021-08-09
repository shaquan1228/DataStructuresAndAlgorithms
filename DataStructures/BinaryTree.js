
var BTSLibrary = require('./../Algos/BinaryTreeSearch.js');

/** 
 * Initializes a Node when given data.
 * @param {Any Type} data or null
*/
var Node = function(data){
    data = data  || null ;
    this.data = data;
    this.left = null;
    this.right = null;
}


/**
 * Initializes a Binary Tree data structure.
 * @param {Any Type} data or null
 */
var BinaryTree = function(data){
    data = data || null;
    this.root = null;
    if (data !== null)
        this.insert(data);
}


/**
 * Instantiates a node from Any Type of data and appends it to a Binary Tree.
 * Leaf nodes are appended to to the left first.
 * @param {Any Type} data
 */
BinaryTree.prototype.insert = function(data){

    if(this.root === null)
        return this.root = new Node(data);
    else{
      
            return this.recursivelyInsert(this.root,data); 
    }


}

/**
 * Helper function for insert function.
 * @param {Node} currentNode 
 * @param {Any Type} data 
 * @returns 
 */
BinaryTree.prototype.recursivelyInsert = function(currentNode,data){
    
    if(currentNode.data > data){
        if(currentNode.left == null)
            return currentNode.left = new Node(data);
        else
            return this.recursivelyInsert(currentNode.left, data);
        
    }
    else if (currentNode.data < data) {    
        if(currentNode.right === null)
            return currentNode.right = new Node(data);
        else
            return this.recursivelyInsert(currentNode.right, data);
    
    }
    

}


/**
 * Removes any element in the Binary Tree using in order traversal.
 * @param {Any Type} dataBeingRemoved 
 */
BinaryTree.prototype.remove = function(dataBeingRemoved){

    let helperFunction = function(nodeBeingIterated){
        if(nodeBeingIterated !== null)

            //Check for removing root node
            if(nodeBeingIterated.data === dataBeingRemoved ){
                nodeBeingIterated = setChildrenOfNodeFound(nodeBeingIterated);
                return nodeBeingIterated;
            }
            if(nodeBeingIterated.left !== null && nodeBeingIterated.left.data === dataBeingRemoved){

                nodeBeingIterated.left = setChildrenOfNodeFound(nodeBeingIterated.left);
                return nodeBeingIterated;
            }

            else if(nodeBeingIterated.right !== null &&  nodeBeingIterated.right.data === dataBeingRemoved){

                nodeBeingIterated.right = setChildrenOfNodeFound(nodeBeingIterated.right);
                return nodeBeingIterated;
            }
    }



    let setChildrenOfNodeFound = function(node){
        if(node !== null){
            //Leaf
            if(node.left === null && node.right == null){
                    node = null;
                    return node;
            }
            //1 child
            else if(node.left == null){
                return node.right;
            }
            else if( node.right == null){
                return node.left;
            }
            //2 Children
            else{
                    let currentNode = node.right;
                    while(currentNode.left !== null )
                        currentNode = currentNode.left;
                    node.data = currentNode.data;
                    node.right = setChildrenOfNodeFound(node.right);
                    return node;
            }
        }
    }

    BTSLibrary.inOrderTraversal(myTree.root, helperFunction);

}

let myTree = new BinaryTree();



myTree.insert(10);
myTree.insert(8); 
myTree.insert(9)
myTree.insert(7);
myTree.insert(12);
myTree.insert(20);
myTree.insert(21);



myTree.remove(12);






module.exports = BinaryTree;