/**
Question: array_insideOut
This is essentially reversing each HALF of the array.
[1, 2, 3, 4, 5, 6] becomes 3, 2, 1, 6, 5, 4]
test cases
[1] => [1]
[1, 2] => [1, 2]
[1, 2, 3, 4] => [2, 1, 4, 3]
[1, 2, 3, 4, 5] => [2, 1, 3, 5, 4]
**/

function reverseArray(arr){
  if(!arr || !arr.length || arr.length === 1){
      return arr;
  }
  const half = Math.ceil(arr.length / 2);
  let firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half);

  if((arr.length) % 2 !== 0 ){
      firstHalf = arr.slice(0, half - 1);
      firstHalf.reverse().push(arr[half - 1]);
      return firstHalf.concat(secondHalf.reverse());
  } else {
      return firstHalf.reverse().concat(secondHalf.reverse());
  }
}

