// ||= and &&= (logical assignment)
// for (||) if left side is falsy then  right side will work. but for (&&) if left side is truthy then  right side will work.
let a = null;
a ||= "Default";
console.log(a); // output Default
let b = "Saha";
b &&= "Jewel";
console.log(b); // output Jewel
let c = "";
c &&= "Kumar";
console.log(c); // ""
