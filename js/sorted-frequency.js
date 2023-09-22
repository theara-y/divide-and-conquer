export default function sortedFrequency(arr, target) {
    let first = firstIndex(arr, target, 0, arr.length - 1);
    if(first === -1)
        return -1
    let last = lastIndex(arr, target, 0, arr.length - 1);
    return last - first + 1;
    
}

function firstIndex(arr, target, left, right) {
    if(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] == target && (mid == 0 || arr[mid - 1] != target))
            return mid;

        if(arr[mid] > target)
            return firstIndex(arr, target, left, mid - 1);

        if(arr[mid] < target)
            return firstIndex(arr, target, mid + 1, right);

        if(arr[mid] == target)
            return firstIndex(arr, target, left, mid - 1);
    }
    return -1;
}

function lastIndex(arr, target, left, right) {
    if(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] == target && (mid == arr.length - 1 || arr[mid + 1] != target))
            return mid;

        if(arr[mid] > target)
            return lastIndex(arr, target, left, mid - 1);

        if(arr[mid] < target)
            return lastIndex(arr, target, mid + 1, right);

        if(arr[mid] == target)
            return lastIndex(arr, target, mid + 1, right);
    }
    return -1;
}