// from array return the first match

const user = [
  { id: 1, name: "Saha" },
  { id: 2, name: "Jewel" },
  { id: 3, name: "Kumar" },
];

const find = user.find((u) => u.id === 2);
console.log(find); // return the value { id: 2, name: 'Jewel' } . if there is no match return undefined
const findIndex = user.findIndex((u) => u.id === 1);
console.log(findIndex); // return the index number. if there is no match return -1.
