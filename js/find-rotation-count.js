export default function findRotationCount(arr) {
    return findPivot(arr, 0, arr.length);
  
}

function findPivot(arr, left, right) {
    if(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if(arr[mid] > arr[mid + 1])
            return mid + 1;
        if(arr[mid] < arr[mid - 1])
            return mid;

        let first = findPivot(arr, left, mid - 1);
        let second = findPivot(arr, mid + 1, right);
        return Math.max(first, second);
    }
    return 0;
}