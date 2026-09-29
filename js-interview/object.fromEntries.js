// onject.fromEntries() from array to object;
const user = [
  ["name", "Jewel"],
  ["age", 35],
];
const fromEntries = Object.fromEntries(user);
console.log(fromEntries); // output  { name: 'Jewel', age: 35 }

const prices = { apple: 10, banana: 20, orange: 15 };
console.log(
  Object.fromEntries(
    Object.entries(prices).map(([fruit, price]) => [fruit, price * 2]),
  ),
);
