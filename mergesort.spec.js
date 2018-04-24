describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    expect(split([1, 2])).toEqual([[1], [2]])
  // your code here
  })
})

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    // test the merging algorithm
    expect(merge([2], [1])).toEqual([1, 2]);
  })
})
