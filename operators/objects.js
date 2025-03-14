let person = {
    name: 'Liam',
    age: 18,
}

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary'; // is the same as person['name'] = 'Mary';

console.log(person.name);