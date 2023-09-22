export default function findFloor(arr, target) {
    let index = findFloorIndex(arr, target, 0, arr.length - 1)
    if(index === -1)
        return -1;
    return arr[index];
}

function findFloorIndex(arr, target, left, right) {
    if(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) {
            return mid;
        }

        if(arr[mid] > target) {
            return findFloorIndex(arr, target, left, mid - 1);
        }

        if(arr[mid] < target) {
            let next = findFloorIndex(arr, target, mid + 1, right);
            if(next === -1)
                return mid;
            return next;
        }
    }
    return -1;
}