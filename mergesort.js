//takes in an array and returns a sorted array, using a recursive merge sort methodology
const mergeSort = (array) => {
    if (array.length < 2) {
        return array;
    } else {
        let left = [];
        let right = [];
        let middle = Math.round(array.length / 2);

        for (let i = 0; i < middle; i++) {
            left.push(array[i]);
        }
        for (let j = middle; j < array.length; j++) {
            right.push(array[j]);
        }

        return merge(mergeSort(left), mergeSort(right));
    }
};

function merge(arrOne, arrTwo) {
    let mergedArr = [];
    let m = arrOne.length;
    let n = arrTwo.length
    let i = 0;
    let j = 0;

    while (i < m && j < n ) {
        if (arrOne[i] <= arrTwo[j]) {
            mergedArr.push(arrOne[i++]);

        } else {
            mergedArr.push(arrTwo[j++]);
        }
    }
    for (; i < m; i++) {
        mergedArr.push(arrOne[i++]);
    }
    for (; j < n; j++) {
        mergedArr.push(arrTwo[j++]);
    }


    return mergedArr;
}



console.log(mergeSort([2, 8, 15, 18, 5, 9, 12, 17]));
console.log(mergeSort([2, 4, 1, 6, 5, 3, 8, 7]));
