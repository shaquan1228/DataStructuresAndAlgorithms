/**
 * Cracking the Coding Interview
 * Page 99 
 * Challenge 3.5
 * 
 * PROMPT: Write a program to sort a stack such that the smallest items are on the top. You can use am additional temporary stacck,
 * but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations:
 * push. pop, peek, isEmpty.
 */

var Stack = require('./../DataStructures/Stack.js');

let stackTest = new Stack();
stackTest.push(1);

stackTest.push(5);
stackTest.push(4);
stackTest.push(2);
stackTest.push(10);
stackTest.push(3);

function sortStack(stackOne) {
    let tmpStack = new Stack();

    while (stackOne.isEmpty() === false) {
        // Sorting algorithm
        if (tmpStack.isEmpty() === true)
            tmpStack.push(stackOne.pop());
        else if (stackOne.peek() < tmpStack.peek()) {
            let tmpStackOneData = stackOne.pop();

            stackOne.push(tmpStack.pop());
            stackOne.push(tmpStackOneData)
        }
        else {
            tmpStack.push(stackOne.pop())
        }

    }
    //Reverse order of sorting
    while (tmpStack.isEmpty() === false) {
        stackOne.push(tmpStack.pop())
    }
    return stackOne;
}

/**
 * Proof of solution working.
 */

stackTest = sortStack(stackTest)
let stackIter = stackTest.top
while (stackIter !== null) {
    console.log(stackIter.data)
    stackIter = stackIter.next;
}

module.exports = sortStack;