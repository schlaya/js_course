// Object-oriented Programming (OOP)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
    // if a function is part of an object it is called a Method
    draw: function () {
        console.log("draw");
    },
};

circle.draw(); // Method
