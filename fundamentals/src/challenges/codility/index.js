function getInexistentNumber(sortedArray) {
  for (let index = 1; index <= sortedArray[sortedArray.length - 1]; index++) {
    if (sortedArray.includes(index) === false) {
      return index;
    }
  }
}

function solution(numbers) {
  const sortedArray = numbers
    .sort((a, b) => a - b)
    .filter((positiveNumbers) => positiveNumbers > 0);

  if (!sortedArray.length) return 1;

  const number = getInexistentNumber(sortedArray);

  return number ? number : sortedArray[sortedArray.length - 1] + 1;
}

console.log(solution([5, -1, 7, -3, 1, 0, 6, 1, 2, 1, 2, 3, 9999]));

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.
