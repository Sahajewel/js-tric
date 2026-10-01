// Array.of() vs new Array()
//
let newArr = new Array(3);
console.log(newArr); // [<3 empty items>]
const arrOf = Array.of(10, 5, 2, 3, 5, 9);
console.log(arrOf); // [ 10, 5, 2, 3, 5, 9 ]

for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

const arra1 = newArr.fill(5);
console.log(arra1); // [ 5, 5, 5, <2 empty items> ]
