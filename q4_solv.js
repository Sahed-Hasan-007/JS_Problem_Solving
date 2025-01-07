

let array2 = [3, 4, -1, -5, 3, 10, -7,-7,-7, 10, 1, 9, 7, -9, 0];

function onlyunique(value, index, array2) {
    return array2.indexOf(value) === index;
  }

let result= array2.filter(onlyunique);
console.log(result);