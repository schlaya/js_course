const numbers = [2, 3, 1]
// converts each elements to a string and sorts them
numbers.sort();
console.log(numbers);

// sorts them in reverse
numbers.reverse();
console.log(numbers);

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
]

courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

// logs Javascript first because J 
// is before N in the alphabet
// if the J would be a j then Node would
// be first because N is first in the ascii
console.log(courses);

