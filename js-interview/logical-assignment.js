// ||= and &&= (logical assignment)
// for (||) if left side is falsy then  work right side. but for (&&) if left side is truthy then work right side.
let a = null;
a ||= "Default";
console.log(a); // output Default
let b = "Saha";
b &&= "Jewel";
console.log(b); // output Jewel
let c = "";
c &&= "Kumar";
console.log(c); // ""
