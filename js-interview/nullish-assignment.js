// ??= (Nullish coalescing Assignment) — shotcut set for default value
// if left side is null or undefined,  then assign   right side value
let user = { name: null, age: 0 };

user.name ??= "Guest";
user.age ??= 18;
console.log(user); // output { name: 'Guest', age: 0 }
