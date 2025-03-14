// String primitive
const message = "This is my first message";

// logs the length of the string
console.log(message.length);
// acceses the x index of the string 0 = T, 1 = h
console.log(message[0]);
console.log(message[1]);

// checks if the string has "my" in it
console.log(message.includes("my"));

// checks if the string starts / ends with ('This') (case sensitive)
console.log(message.startsWith("This"));
console.log(message.endsWith("e"));

// checks where the index of x starts at
console.log(message.indexOf("my"));

// replaces the first value with the second (returns a new string, doesn't modify old one)
console.log(message.replace("first", "second"));

// returns the string in caps or lower case
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// trims the spaces at the beginning and end of string
console.log(message.trim());

// splits a string at every space
console.log(message.split(" "));

// escape notation \
let string = "this is how to add a ' to a string";
let string2 = "this is how to add a \n new line to a string";

// String object
const another = new String("hi");
