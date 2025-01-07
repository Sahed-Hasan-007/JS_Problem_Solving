

let array = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];

function div_by_ten(array){
    let result = array.filter((value) => value % 10 == 0);
    return result;
}

let result= div_by_ten(array);

console.log(result)