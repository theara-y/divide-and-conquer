function countZeroesNoRecursion(arr) {
    let left = 0;
    let right = arr.length - 1;

    if(arr[left] === 0)
        return arr.length;
    if(arr[right] === 1)
        return 0;

    while(left <= right) {
        let middle = Math.floor((left + right) / 2);

        if(arr[middle] == 0) {
            if(arr[middle - 1] == 1)
                return arr.length - middle;
            right = middle - 2;
        } else {
            if(arr[middle + 1] == 0)
                return arr.length - (middle + 1)
            left = middle + 2;
        }
    }
    return 0;
}

function countZeroes(arr) {
    let firstIndex = firstZero(arr, 0, arr.length - 1)

    if(firstIndex === -1)
        return 0;
    return arr.length - firstIndex;
}

function firstZero(arr, left, right) {
    if(left <= right) {
        mid = Math.floor((left + right) / 2);

        if(arr[mid] == 0 && (mid == 0 || arr[mid - 1] == 1))
            return mi

        if(arr[mid] == 1)
            return firstZero(arr, mid + 1, right);
        else
            return firstZero(arr, left, mid - 1);

    }
    return -1;
}

module.exports = countZeroes