//finding an average with reduce

var yuan = [29.50, 44.88, 88.5];

var sum = yuan.reduce(function(total, amount, index, array) {
  if (index === array.length - 1) {
    return (total + amount) / array.length;
  } else {
    return total + amount;
  }
});
console.log(sum);
