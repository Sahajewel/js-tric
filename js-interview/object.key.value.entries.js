// Javascript object methods keys(), values(), entries().
// These methods convert object properties into arrays so we can easily iterate over them.
const user = {
  name: "Jewel",
  age: 36,
  city: "Cumilla",
};
const keys = Object.keys(user); // returns an array of keys
const values = Object.values(user); // returns an array of values
const entries = Object.entries(user); // returns an array of [key, value] pairs

const result = keys.forEach((key) => console.log(key));
for (const key of keys) {
  console.log(key);
}
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}
