var CommonSorting = {


    /**
     * 
     * Starts at the beginning of the array and swaps the first two elements
     * if the first element is greater than the second. Then, we go to the next 
     * pair and so on, conintuously making sweeps of the array until it is sorted.
     * @param {Array} array 
     */
    bubbleSort: function (array) {
        let n = 0;
        for (let h = 0; h < array.length - 1; h++) {
            let swapped = false;
            n++;
            for (let i = 0; i < (array.length - h - 1); i++) {
                n++;
                if (array[i] > array[i + 1]) {
                    let tmp = array[i];
                    array[i] = array[i + 1]
                    array[i + 1] = tmp;
                    swapped = true;
                }
            }
            if (swapped === false)
                break;
        }
        console.log("n = ", array.length, ". Runtime =", n);

    },


    /**
     * Finds the smallest element using a linear scan and moves it to the front
     * (swapping it with the front element). Then, find the second smallest and
     * move it, again doing a linear scan. Continue doing this until all the 
     * elements are in place.
     * @param {Array} array 
     */
    selectionSort: function (array) {
        let n = 0;

        for (let i = 0; i < array.length; i++) {
            // n++;

            let min = array[i];
            //Perform a linear scan for the minimum
            for (let j = i + 1; j < array.length; j++) {
                n++;
                if (min > array[j])
                    min = array[j]
            }

            //Perform swap if a new minimum is found
            if (min !== array[i]) {
                let mindex = array.indexOf(min)
                array[mindex] = array[i];
                array[i] = min;
            }
        }
        console.log("n = ", array.length, ". Runtime =", n);
    }
}

module.exports = CommonSorting;