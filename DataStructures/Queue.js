
/** 
 * Initializes a Node when given data.
 * @param {Any Type} data or null
*/
var Node = function(data){
    data = data || null;
    this.data = data;
    this.next = null;
}

/**
 * Initialize the Queue data structure when given data.
 * @param {Any Type} data
 */
 var Queue = function(item) {
    item = item || null;
    this.first = null;
    this.last = null;
    this.add(item);
};

/** 
 * Adds any type of data to the Queue data structure as a Node.
 * @param {Any Type} item
 */
Queue.prototype.add = function(item){
    let newNode = new Node(item);
    if (this.last !== null)
        this.last.next = newNode;
    this.last = newNode;
    if (this.first === null){
        this.first = this.last;
    }
}

/**
 * Removes the first (last inserted) Node in the Queue data structure and returns the data.
 * @return {Any Type} Data from the first Node in the data structure.
 */
Queue.prototype.remove = function(){
    if (this.first === null)
        return null
    let returnValue = this.first.data;
    this.first = this.first.next;
    if (this.first === null)
        this.last = null;
    return returnValue;

}

/**
 * Shows the first (last inserted) element in the Queue data structure without removing it.
 * @return {Any Type} The data from the last node in the Queue.
 */
 Queue.prototype.peek = function (){
    if(this.first === null)
        return null;
    return this.first.data;
}

/**
 * Detects if the Queue data structure is empty.
 * @return {Boolean} If the Stack is empty or not.
 */
 Queue.prototype.isEmpty = function (){
   return (this.first === null);
}



module.exports = Queue;