
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

// does not work
courses.includes({ id: 1, name: 'a'})

// if you have an array with two reference types
// you need to use the find function

// function is known as a callback function
// the course defines a element, 
// can be named whatever you like
courses.find(function(course) {
    return course.name === 'a'
});

// returns 0
const course = courses.findIndex(function(course) {
return course.name === 'a';
});