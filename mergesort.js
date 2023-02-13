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

        // left.sort()
        // right.sort()

        mergeSort(left);
        mergeSort(right);
        return merge(left, right);
    }
};

function merge(arrOne, arrTwo) {
    let mergedArr = [];
    let m = arrOne.length;
    let n = arrTwo.length;
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < m && j < n) {
        if (arrOne[i] <= arrTwo[j]) {
            mergedArr[k++] = arrOne[i++];

        } else {
            mergedArr[k++] = arrTwo[j++];
        }
    }
    for (; i < m; i++) {
        mergedArr[k++] = arrOne[i++];
    }
    for (; j < n; j++) {
        mergedArr[k++] = arrTwo[j++];
    }
    return mergedArr;
}



// // 2,5,8,9,12,15,17,18
// // console.log(mergeSort([2, 8, 15, 18, 5, 9, 12, 17]));
// // console.log(mergeSort([2, 4, 1, 6, 5, 3, 8, 7]));

// // console.log(merge([2, 8, 15, 18], [5, 9, 12, 17]));



let mySort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            //nothing to be done, just iterate 
            i++;

        } else {
            let end = arr[i + 1];
            let current = arr[i];

            //swap
            arr[i] = end;
            arr[i + 1] = current;

            //iterate
            i++;
        }
    }

    return arr;
}
