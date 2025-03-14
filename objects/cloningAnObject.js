const circle = {
    radius: 1,
    draw() {
        console.log("draw");
    },
};

//const another = {};
//for (let key in circle) {
//    another[key] = circle[key];
//    // is the same as the followin
//    // another["radius"] = circle["radius"];
//    console.log(another);
//}

// this takes all the properties of circle
// and copies them into the new object
// const another = Object.assign({}, circle);
// this up here is a modern version

//even better one
// this is the spread method
// it takes all the properies of circle and clones them
// into another = {}
const another = { ...circle };
console.log(another);

// object.assign copies one or more obejcts into the {}
// used to copy or combine objects
