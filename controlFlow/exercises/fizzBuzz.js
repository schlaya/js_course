// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(4);

function fizzBuzz(input) {
    if (typeof(input) !== 'number') {
        return console.log('Not a number')
    }
    else if (input % 3 === 0 && input % 5 === 0) {
        return console.log('FizzBuzz')
    }
    else if (input % 3 === 0) {
        return console.log('Fizz');
    } 
    else if (input % 5 === 0) {
        return console.log('Buzz')
    }
    else if (input % 3 !== 0 && input % 5 !== 0) {
        console.log(input)
    }
    else {
        console.log('error')
    }
}