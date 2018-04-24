function split (wholeArray) {
  let midpoint = Math.floor((wholeArray.length / 2))
  let firstHalf = wholeArray.slice(0, midpoint)
  let secondHalf = wholeArray.slice(midpoint)

  return [firstHalf, secondHalf]
}

function merge (arr1, arr2) {
  let newArr = []

  while (arr1.length || arr2.length) {
    console.log(arr1, arr2)
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1[0])
      arr1 = arr1.slice(1)
    } else if (arr1[0] > arr2[0]) {
      newArr.push(arr2[0])
      arr2 = arr2.slice(1)
    } else if (arr1.length && !arr2.length) {
        newArr.push(arr1[0])
        arr1 = arr1.slice(1)
      } else {
        newArr.push(arr2[0])
        arr2 = arr2.slice(1)
      }
  }

  return newArr
}

