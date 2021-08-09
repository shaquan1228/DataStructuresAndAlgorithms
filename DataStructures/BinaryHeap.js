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
var BinaryHeap = function(data){
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
BinaryHeap.prototype.insert = function(data){
    let newNode = new Node(data);
    if(this.root===null)
        this.root = newNode;
    else{
        this.recursivelyInsert(this.root,newNode);

        this.fixTree(this.root,newNode);

    }
}



BinaryHeap.prototype.fixTree = function(currentNode, insertedNode){
    
    if(currentNode!==null){
        
        if(currentNode.left !== null && currentNode.left.data === insertedNode.data ){
                
            if(currentNode.data > insertedNode.data){
                let tmp = currentNode.data;
                currentNode.data = insertedNode.data;
                insertedNode.data = tmp;
                
                return this.fixTree(this.root,currentNode)
            }
        }
        else if(currentNode.right !== null && currentNode.right.data === insertedNode.data ){
            if(currentNode.data > insertedNode.data){ 
                let tmp = currentNode.data;
                currentNode.data = insertedNode.data;
                insertedNode.data = tmp;

                return this.fixTree(this.root,currentNode)
            }
        }
        else if(currentNode.right !== null){
            return this.fixTree(currentNode.right,insertedNode)}
        else if(currentNode.left !== null)
            return this.fixTree(currentNode.left,insertedNode)
    }
   

}

BinaryHeap.prototype.recursivelyInsert = function(node,newNode){
    if(node.left === null)
        return node.left = newNode;
    else if(node.right === null)
        return node.right = newNode;
    else if (node.left.right === null || node.left.left === null)
        return this.recursivelyInsert(node.left,newNode)
    else if (node.right.right === null || node.right.left)
        return this.recursivelyInsert(node.right,newNode)
    else if(node.data < newNode.data)
        return this.recursivelyInsert(node.right,newNode)
    else 
        return this.recursivelyInsert(node.left,newNode)
}



BinaryHeap.prototype.extractMin = function(){

    let returnValue = this.root;


    //Find rightmost child and put set it as the root.
    //In this step, you must also make sure you remove the Node link to the last child.
    let currentNode = this.root;
    while(currentNode.left!==null || currentNode.right!==null)
        if(currentNode.right!==null){
            if(currentNode.right.left === null && currentNode.right.left ===null){
                let tmp = currentNode;
                currentNode = currentNode.right;
                tmp.right = null;
            }
            else
                currentNode = currentNode.right;
        }
        else if(currentNode.left!==null)
            if(currentNode.left.left === null && currentNode.left.left ===null){
                let tmp = currentNode;
                currentNode = currentNode.left;
                tmp.left = null;
            }
            else
                currentNode = currentNode.left;
            
    
    //Updating the root's links
    this.root = currentNode;
    this.root.left = returnValue.left;
    this.root.right = returnValue.right;

    //Now I will use the extraMinHelper to find the min
    this.extractMinHelper();
    return returnValue;

}

BinaryHeap.prototype.extractMinHelper = function(currentNode){

    currentNode = currentNode || this.root;
    

    if(currentNode !== null){
        //If we are at a leaf 
        if(currentNode.left!==null && currentNode.right !==null )
                //Compare the left and right data and decide to swap
                if (currentNode.left.data > currentNode.right.data){
                    //Swap right 
                    let tmp = currentNode.right.data;

                    currentNode.right.data = currentNode.data;
                    console.log(currentNode.data);
                    currentNode.data = tmp;
                    
                    //Recurse for currentNode's new right child
                    this.extractMinHelper(currentNode.right);
                }
                else if (currentNode.left.data < currentNode.right.data){
                    //Swap left
                    let tmp = currentNode.left.data;
                    currentNode.left.data = currentNode.data;
                    currentNode.data = tmp.data;
                    
                    //Recurse for currentNode's new left child
                    this.extractMinHelper(currentNode.left);
                }
        //TODO: I THINK I NEED TO CHECK FOR THE CASE WHERE OUR MINIMUM IS NOT A LEAF
                
    }


}
let myHeap = new BinaryHeap();
myHeap.insert(4);
myHeap.insert(50);
myHeap.insert(7);
myHeap.insert(55);
myHeap.insert(90);
myHeap.insert(87);
myHeap.insert(2);

myHeap.extractMin()
console.log(myHeap);

module.exports = BinaryHeap;