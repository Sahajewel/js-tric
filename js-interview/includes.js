// includes() and indexOf() method.
// includes(): Checks if an element exists. Returns true if found, false if not.
// indexOf(): Returns the index(0,1,2....) of the element if dound, -1 if not.
const arr = [2, NaN, "saha"];
console.log(arr.includes(NaN)); // true, sameValueZero
console.log(arr.indexOf(NaN)); // false, strict equality(===)

const fruits = ["apple", "banana", "orange"];

// includes()
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("mango")); // false

// indexOf()
console.log(fruits.indexOf("banana")); // 1 (কারণ 'banana' ১ নম্বর ইনডেক্সে আছে)
console.log(fruits.indexOf("apple")); // 0 (কারণ 'apple' ০ নম্বর ইনডেক্সে আছে)
console.log(fruits.indexOf("mango")); // -1 (যেহেতু খুঁজে পাওয়া যায়নি)

/* 
+-------------------------+-------------------+-------------------+-----------------------------------+-------------------+-----------------------------------
| Feature                            | includes()        | indexOf()         | find()                                | findIndex()       |
+-------------------------+-------------------+-------------------+-----------------------------------+-------------------+-----------------------------------
| Return Valuewhat give output?      | true / false      | Index (or -1)     | Element Value (or undefined)           | Index (or -1)     |
| search type                        | direct value       | direct value      | condition/callback                   | condition/callback  |
//  works on Array of Objects?       | ❌ no             | ❌ no             | ✅ yes                               | ✅ yes          |
+-------------------------+-------------------+-------------------+-----------------------------------+-------------------+-----------------------------------
*/
