const numbers = [3, 4, 5, 6, 7, 8, 9];

// const squer = []

// for(let i=0; i<numbers.length; i++){

//     const element = numbers[i];
//     const result = element * element;
//     squer.push(result);
// }
// console.log(squer);



// const result = numbers.map(x => x * x)

const result = numbers.filter(x => x < 6)
console.log(result);