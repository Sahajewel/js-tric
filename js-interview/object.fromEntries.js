// onject.fromEntries() from array to object;
const user = [
  ["name", "Jewel"],
  ["age", 35],
];
const fromEntries = Object.fromEntries(user);
console.log(fromEntries); // output  { name: 'Jewel', age: 35 }
