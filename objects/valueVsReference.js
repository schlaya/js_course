let x = 10;
// y will still be 10 when logged
let y = x;

x = 20;

let c = { value: 10 };
// d will be 20 when logged
let d = c;

c.value = 20;

let number = 10;

function increase(number) {
    // inside the function, number will be 11
    // outside the function, number will still be 10,
    // because it's out of scope
    number++;
}

increase(number);
console.log(number); // will log 10

let obj = { value: 10 };

function increased(obj) {
    // inside the function, obj.value will be 11
    // outside the function, obj.value will be 11
    obj.value++;
}

increased(obj);
console.log(obj); // will log 11
