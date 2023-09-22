function findFloor(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);

        if(arr[middle] === target) {
            return arr[middle];
        } else {
            if(arr[middle] > target) {

            }
        }
    }
}

function findIndex(arr, left, right) {
    if(left <= right) {
        let mid = Math.floor((left + right) / 2);

        
    }
    return -1;
}

module.exports = findFloor

expect(findFloor([1, 2, 8, 10, 10, 12, 19], 5)).toBe(2) // 2
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19) // 19
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1) // -1