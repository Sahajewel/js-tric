// console.log("10" - 3);
// console.log("10" + 3);
// console.log(+"10" + 3);
// console.log(!!"0");
// console.log(!NaN);

// Problem 2: [3, 0, "", "hi", null, 7, undefined] theke sob falsy value remove koro, tarpor at(-1) diye last item print koro.
const arr = [3, 0, "", "hi", null, 7, undefined];
const filter = arr.filter(Boolean).at(-1);
console.log(filter);

// Problem 3: Ei code e || er jaygay ?? boshale output ki change hobe?

const config = { port: 0, host: "" };
// console.log(config.port || 3000);
// console.log(config.host || "localhost");
console.log(config.port ?? 3000);
console.log(config.host ?? "localhost");

// Problem 4: [1, [2, [3, [4]]], 5] ke flat koro, tarpor sob number er square kore ekta notun array banao.

// const arr2 = [1, [2, [3, [4]]], 5];
// const flatArr = arr2.flat(Infinity).map((num) => num * num);
// console.log(flatArr);

// Problem 5: Ekta function createUser(name, age, isAdmin) lekho jeta object return kore. isAdmin true hole role: "Admin" property thakbe, na hole thakbe na. age er default value 18. (Shorthand + conditional property + default param)
function createUser(name, age = 18, isAdmin) {
  return {
    name,
    age,
    ...(isAdmin && { role: "Admin" }),
  };
}
console.log(createUser("Jewel", 25, false));
