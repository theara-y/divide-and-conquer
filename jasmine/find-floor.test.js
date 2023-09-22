import findFloor from '../js/find-floor.js';

describe("#findFloor", function(){
  it("returns the floor or -1", function(){
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 5)).toBe(2) // 2
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19) // 19
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1) // -1
    expect(findFloor([0], 0)).toBe(0);
    expect(findFloor([1], 1)).toBe(1);
    expect(findFloor([1], 2)).toBe(1);
    expect(findFloor([1, 2], 3)).toBe(2);
    expect(findFloor([1], 0)).toBe(-1);
  })
})