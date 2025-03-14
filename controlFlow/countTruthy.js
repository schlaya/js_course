// ''
// falsy
// false
// NaN
// 0
// undefined
// null

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        // if value is equal to true count++ else return count
        if (value)
            count++;
        return count;
}

const array = [1, 2, 'a', 5]

console.log(countTruthy(array))