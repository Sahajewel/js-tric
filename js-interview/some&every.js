// javascript array method some() and every()
// some(): Returns true if at least one element satisfies the condition
// every(): Returns true if all elements satisfy the condition, otherwise returns false.
const nums = [2, 4, 6, 8];

console.log(nums.some((n) => n > 5)); // returns true
const every = nums.every((n) => n % 2 === 0); // returns true
console.log(every);
