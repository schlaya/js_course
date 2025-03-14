// Factory Function
function createCircle(radius) {
    return {
        // is the same as radius: radius,
        radius,
        // is the same as function draw() {}
        // is used in a function
        draw() {
            console.log("draw");
        },
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
