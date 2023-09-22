export default function countZeroes(arr) {
    let firstIndex = firstZero(arr, 0, arr.length - 1)

    if(firstIndex === -1)
        return 0;
    return arr.length - firstIndex;
}

function firstZero(arr, left, right) {
    if(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] == 0 && (mid == 0 || arr[mid - 1] == 1))
            return mid

        if(arr[mid] == 1)
            return firstZero(arr, mid + 1, right);
        else
            return firstZero(arr, left, mid - 1);

    }
    return -1;
}