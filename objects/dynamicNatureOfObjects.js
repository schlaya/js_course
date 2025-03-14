// we cannot reassign this constant but
// we can change the properties of the object
const circle = {
    radius: 1,
};

circle.color = "yellow";
circle.draw = function () {};

delete circle.color;
delete circle.draw;

console.log(circle);
