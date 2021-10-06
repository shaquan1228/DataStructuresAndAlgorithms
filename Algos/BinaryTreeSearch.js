var BinaryTreeSearch = {

    /**
    * Traverses the tree by visiting the left branch, then the current node, followed by the right branch. Nodes are visited in 'ascending' order.
    * @param {Node} node with a left and right attribute
    * @param {func} visit function to perform when a node is visited. Often times, console.log is a good function to pass
    */
    inOrderTraversal: function (node, visit) {

        visit = visit || console.log;
        if (node !== null) {
            this.inOrderTraversal(node.left, visit)
            visit(node)
            this.inOrderTraversal(node.right, visit)
        }
    },

    /**
    * Traverses the tree by visiting the current node, then left branch, followed by the right branch. Root nodes is visited last.
    * @param {Node} node with a left and right attribute
    * @param {func} visit function to perform when a node is visited. Often times, console.log is a good function to pass
    */
    postOrderTraversal: function (node, visit) {
        visit = visit || console.log;

        if (node !== null) {
            this.postOrderTraversal(node.left, visit);
            this.postOrderTraversal(node.right, visit);
            visit(node);

        }
    },

    /**
    * Traverses the tree by visiting the left branch, then the right branch and lastly, the current node. Root nodes are visited first.
    * @param {Node} node with a left and right attribute
    * @param {func} visit function to perform when a node is visited. Often times, console.log is a good function to pass
    */
    preOrderTraversal: function (node, visit) {
        visit = visit || console.log;

        if (node !== null) {
            visit(node);
            this.preOrderTraversal(node.left, visit);
            this.preOrderTraversal(node.right, visit);

        }
    }

}





module.exports = BinaryTreeSearch;




