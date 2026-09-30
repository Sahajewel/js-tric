// Array.from()

const arrNumber = Array.from({ length: 5 }, (_, index) => (index + 1) * 2);

// using currying
const curr = (length) => (fn) => Array.from({ length }, (_, i) => fn(i + 1));
const length = curr(10);
const double = length((i) => (i + 1) * 2);
const add = length((i) => i * i);
console.log(add);

const str = "React";
console.log(Array.from("Jewel").reverse().join(""));
console.log(str.split("").reverse().join(""));
