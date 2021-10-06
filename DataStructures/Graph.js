/**
 * Initializes a Node when given data.
 * @param {Any Type} data or null
 */
var Node = function (data) {
    data = data || null;
    this.data = data;
    this.children = []; //A collection of edges for each node
};

/**
 * Initializes a Graph.
 * @param {Any Type} data or null
 */
var Graph = function (data) {
    data = data || null;
    this.nodes = []; //A collection of all vertices in the Graph data structure
    if (data !== null)
        this.nodes.push(new Node(data));
}

/**
 * Checks if the vertex already exists in the Graph data structure. If not, it is added.
 * @param  {Node || AnyType} vertex 
 */
Graph.prototype.addVertex = function (vertex) {
    if (typeof vertex === "object" && vertex.children !== undefined) { // Case where vertex is a Node
        if (this.nodes.includes(vertex) === false)
            this.nodes.push(vertex);
    }
    else { //Case where vertex is Any Type other than Node
        let tempNode = new Node(vertex);
        if (this.nodes.includes(tempNode) === false)
            this.nodes.push(tempNode);
    }
}

/**
 * Checks if the vertex exists in the Graph data structure. If so, it is removed.
 * @param {Node || AnyType} vertex 
 * @return {Node} 
 */
Graph.prototype.removeVertex = function (vertex) {
    if (typeof vertex != "object" && vertex.children === undefined) { // Case where vertex is a Node
        let index = this.nodes.findIndex(i => i.data === vertex);
        vertex = this.nodes[index];
    }

    this.nodes.forEach(node =>
        (node.children.findIndex(child => child === vertex) > -1)
        && node.children.splice(node.children.findIndex(child => child === vertex), 1)
    )
    return (this.nodes.indexOf(vertex) > -1) && this.nodes.splice(this.nodes.indexOf(vertex), 1)

}

/**
 * A helper method that returns the Node in the Graph data structure so that 
 * @param {Any Type} data 
 * @return {Node} corresponding node from the Graph data structure.
 */
Graph.prototype.getVertex = function (data) {

    return this.nodes[this.nodes.findIndex(n => n.data === data)]
}

/**
 * Adds an edge from vertex 1 to vertex 2. 
 * Vertex 2 will be stored as a child of vertex 1.
 * @param {Node} vertex1 
 * @param {Node} vertex2 
 */
Graph.prototype.addEdge = function (vertex1, vertex2) {

    if (typeof vertex1 !== "object" && vertex1.children === undefined
        && typeof vertex2 !== "object" && vertex2.children === undefined
    ) {

        vertex1 = this.nodes[this.nodes.findIndex(n => n.data === vertex1)]
        vertex2 = this.nodes[this.nodes.findIndex(n => n.data === vertex2)]
    }

    if (vertex1 && vertex2 && vertex1.children.includes(vertex2) === false)
        vertex1.children.push(vertex2);
}

/**
 * Removes an edge between vertex 1 to vertex 2 if one exists. 
 * Vertex 2 will no longer be stored as a child of vertex 1.
 * @param {Node} vertex1 
 * @param {Node} vertex2 
 * @return {Node}
 */
Graph.prototype.removeEdge = function (vertex1, vertex2) {
    if (typeof vertex1 !== "object" && vertex1.children === undefined
        && typeof vertex2 !== "object" && vertex2.children === undefined
    ) {
        vertex1 = this.nodes[this.nodes.findIndex(n => n.data === vertex1)]
        vertex2 = this.nodes[this.nodes.findIndex(n => n.data === vertex2)]
    }

    if (vertex1 && vertex2 && vertex1.children.includes(vertex2) === true)
        return vertex1.children.indexOf(vertex2) && vertex1.children.splice(vertex1.children.indexOf(vertex2), 1);
    else
        return -1
}

/**
 * Checks if an edge exists between two nodes.
 * @param {Node} vertex1 
 * @param {Node} vertex2 
 * @return {Boolean} 
 */
Graph.prototype.isAdjacent = function (vertex1, vertex2) {
    if (typeof vertex1 !== "object" && vertex1.children === undefined
        && typeof vertex2 !== "object" && vertex2.children === undefined
    ) {
        vertex1 = this.nodes[this.nodes.findIndex(n => n.data === vertex1)]
        vertex2 = this.nodes[this.nodes.findIndex(n => n.data === vertex2)]
    }

    if (vertex1 && vertex2)
        return vertex1.children.includes(vertex2);
    else
        return false
}


module.exports = Graph;