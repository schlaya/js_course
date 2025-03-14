// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw");
        },
    };
}

// Constructor Function
function Circle(radius) {
    //this is a reference to the object
    // that is executing this piece of code
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    };
}

// new operator creates an empty object
// this on line 4 is new equal to new Object()
const circle = new Circle(1);
console.log(circle);
