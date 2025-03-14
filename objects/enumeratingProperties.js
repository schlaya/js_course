const circle = {
    radius: 1,
    draw() {
        console.log("draw");
    },
};

for (let key in circle) {
    console.log(key, circle[key]);
}

// Object.key converts the object into an array
for (let key of Object.key(circle)) {
    console.log(key);
}

// returns each key value pair as an array
for (let entry of Object.entries(circle)) {
    console.log(entry);
}

// if it is in circle it logs yes
if ("radius" in circle) console.log("yes");
