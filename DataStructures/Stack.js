/** 
 * Initializes a Node when given data.
 * @param {Any Type} data
*/
var Node = function (data) {
    data = data || null;
    this.data = data;
    this.next = null;
}


/**
 * Initialize the Stack data structure when given data.
 * @param {Any Type} data
 */
var Stack = function (item) {
    item = item || null;
    if (item !== null)
        this.top = new Node(item);
    else
        this.top = null;
};

/**
 * Removes the last element in the Stack data structure.
 * The last element in the Stack is at the top of the data structure.
 * @return {Any Type} The data from the last Node in the Stack.
 */
Stack.prototype.pop = function () {
    if (this.top === null)
        return null;

    let returnValue = this.top.data;
    this.top = this.top.next;
    return returnValue;
}

/**
 * Adds an element to the top of the Stack data strcture.
 * @param {Any Type} item 
 */
Stack.prototype.push = function (item) {
    let newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
}

/**
 * Shows the last element in the Stack data structure without removing it.
 * @return {Any Type} The data from the last node in the Stack.
 */
Stack.prototype.peek = function () {
    if (this.top === null)
        return null;
    return this.top.data;
}

/**
 * Detects if the Stack data structure is empty.
 * @return {Boolean} If the Stack is empty or not.
 */
Stack.prototype.isEmpty = function () {
    return (this.top === null);
}



module.exports = Stack;
