//find the number in an array that doesn't belong

function stray(numbers) {
  numbers.sort();
  if (numbers[0] !== numbers[1]) {
    return numbers[0];
  } else return numbers[numbers.length - 1];
}

