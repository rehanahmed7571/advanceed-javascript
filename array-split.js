const numbers = [1,2,3,4,5,6,7,8,9,10];

const part = numbers.slice(3,8);
// console.log(part);

const part2 = numbers.splice(4,5, 77,33,44, 55);

// console.log(part2);
console.log(numbers);

const together = numbers.join("  ");
console.log(part2);

