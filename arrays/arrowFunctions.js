
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
]

// if your function has a single 
// paramater there is no need for parentheses
const course = courses.find((course) => {
    return course.name === 'a'
});

// if your function is a single line of 
// code and returns one value:

const courseSingle = courses.find(courseSingle => courseSingle.name === 'a')

console.log(course)