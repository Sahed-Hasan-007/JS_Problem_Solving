

let array = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];

let result = array.filter((val) => val > 0 &&
val < 100 && val % 2 !== 0);
console.log(result);