var Node = function(data){
    data = data || null;
    this.data = data;
    this.next = null;
    this.previous = null;
}


/*
* Adds Node to the end of the LinkedList.
* @param {anyType} data
* @return {void}
*/
Node.prototype.appendToTail = function(data){
    const n = this;
    let newNode = new Node(data)
    //If our LinkedList has a tail, make the tail's previous node reference the new node. 
    if(n.tail)
        n.tail.next = newNode;
    newNode.previous = n.tail;
    n.tail = newNode;
}


/*
* Initialize your data strucutre  here.
*/
var LinkedList = function(){
    this.head = null
    this.tail = null
}

/*
* Adds Node to the beginning of the LinkedList.
* @param {anyType} data
* @return {void}
*/
LinkedList.prototype.add = function(data){
    let newNode = new Node(data);
    const n = this;
    newNode.next = n.head;
    //If the original head exists, make its previous node reference the new node.
    if(n.head) 
        n.head.previous = newNode;
    n.head = newNode;
    //If added node does not have a proceeding node, make the newly appended node the tail. n.head.next is the same as newNode.next or n.head
    if(!newNode.next)
        n.tail = newNode
}


/*
* Removes and returns a node from any position in the LinkedList.
* @param {int} key
* @return {void}
*/
LinkedList.prototype.removeFrom = function(searchIndex){
    const n = this;
    let count = 0;
    let currentNode = this.head;
    
    while(currentNode){
        if(count===searchIndex){
            if(searchIndex===0)
                n.head = currentNode.next;
            if(currentNode.previous)
                currentNode.previous.next = currentNode.next;
            if(currentNode.next)
                currentNode.next.previous = currentNode.previous;
            if(!currentNode.next)
                n.tail = currentNode.previous;
            return currentNode;
        }
        count++;
        currentNode = currentNode.next;
    }
    return null;
}

/*
* Removes and returns the first node from any position in the LinkedList.
* @param {int} key
* @return {void}
*/
LinkedList.prototype.remove = function(){
    return this.removeFrom(0);
}

/*
* Returns the size of the LinkedList.
* @return {number} The number of elements in the list.
*/
LinkedList.prototype.size = function(){
    let count = 0;
    let n = this.head;
    while(n){
        count++;
        n = n.next;
    }
    return count;
}



module.exports = LinkedList;