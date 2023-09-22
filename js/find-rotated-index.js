export default function findRotatedIndex(arr, target) {
    let pivot = findPivot(arr, 0, arr.length -1);
    if(pivot == -1)
        return findIndex(arr, target, 0, arr.length - 1);

    let firstHalf = findIndex(arr, target, 0, pivot - 1);
    if(firstHalf != -1)
        return firstHalf;

    return findIndex(arr, target, pivot, arr.length - 1);
}

function findIndex(arr, target, left, right) {
    if(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] == target)
            return mid
        if(arr[mid] < target)
            return findIndex(arr, target, mid + 1, right);
        return findIndex(arr, target, left, mid - 1);
    }
    return -1;
}

function findPivot(arr, left, right) {
    if(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] > arr[mid + 1])
            return mid + 1;
        if(arr[mid] < arr[mid - 1])
            return mid;
        
        let firstHalf = findPivot(arr, left, mid - 1);
        let secondHalf = findPivot(arr, mid + 1, right);
        return Math.max(firstHalf, secondHalf);

    }
    return -1;
}