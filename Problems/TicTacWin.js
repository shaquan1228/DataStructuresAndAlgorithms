/**
 * Cracking the Coding Interview
 * Page 181 
 * Challenge 16.4
 * 
 * PROMPT: Design an algorithm to figure out if someone has won 
 * a game of tic-tac-toe.
 */

/**
 * 
 * @param {Array} array a 9 element array with X's and O's or 1's and O's.
 */
function TicTacWin(array) {
    console.log(array)
    for (let i = 0; i <= 6; i++) {
        if (array[i]) {
            if (i < 2 && i % 2 === 0) {
                if (array[i + 3] === array[i] && array[i] === array[i + 6])
                    return true;
            }
            if (i % 3 === 0) {
                if (array[i] === array[i + 1] && array[i] === array[i + 2])
                    return true;
            }
            if (i === 4) {
                if (array[i - 4] === array[i] && array[i] === array[i + 8])
                    return true;
                if (array[i - 2] === array[i] && array[i] === array[i + 2])
                    return true;
            }
        }
    }
    return false;
}



console.log(TicTacWin(myArray))