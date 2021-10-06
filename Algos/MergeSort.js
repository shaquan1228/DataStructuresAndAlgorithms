/**
 * Merge sort divides an array in half, sorts each of those halves and then merges them back together.
 * Each of those halves has the same sorting algorithm applied to it. Eventually, you are merging
 * just two single-element arrays. It is the 'merge' part that does all of the heavy lifting.
 * @param {Array} array 
 */
var MergeSort = function (array) {
    let helper = new Array(array.length);
    mergeSort(array, helper, 0, array.length - 1);
}

/**
 * A helper function for MergeSort.
 * @param {Array} array 
 * @param {Array} helper 
 * @param {Integer} low 
 * @param {Integer} high 
 */
function mergeSort(array, helper, low, high) {
    if (low < high) {
        let middle = parseInt((low + high) / 2);
        mergeSort(array, helper, low, middle);
        mergeSort(array, helper, middle + 1, high);
        merge(array, helper, low, middle, high);
    }
}

/**
 * 
 * @param {Array} array 
 * @param {Array} helper 
 * @param {Integer} low 
 * @param {Integer} middle
 * @param {Integer} high 
 */
function merge(array, helper, low, middle, high) {
    for (let i = low; i <= high; i++) {
        helper[i] = array[i];
    }

    let helperLeft = low;
    let helperRight = middle + 1;
    let current = low;

    while (helperLeft <= middle && helperRight <= high) {
        if (helper[helperLeft] <= helper[helperRight]) {
            array[current] = helper[helperLeft];
            helperLeft++;
        }
        else {
            array[current] = helper[helperRight];
            helperRight++;
        }
        current++;
    }

    let remaining = middle - helperLeft;
    for (let i = 0; i <= remaining; i++)
        array[current + i] = helper[helperLeft + i];
}


let t = [99, 88, 77, 55, 66, 44, 33, 22, 11]
MergeSort(t);
console.log(t)

module.exports = MergeSort;