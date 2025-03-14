function oddOrEven(number) {
    if (number % 2 === 0) 
        return console.log('EVEN')
    return console.log('ODD')
}

oddOrEven(11)

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i, 'EVEN')
        else console.log(i, 'ODD')
    }
}

showNumbers(10)