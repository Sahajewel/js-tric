// tric-1 javascript + oparator sudu string concanate kore, kintu substruct, multiple, divide cocanate korte pare na, se oi string ke implcitely number e convert kore. It is called type coeccion.

const x = 5;
const y = "5";

console.log(x + y); // The answer is "55"
console.log(x - y); // The answer is 0, because y="5" converted to number 5, and 5-5=0

// tric-2
// we converter string to number by using + operator

const str = "5";
const num = 5;
console.log(+str + num); // The answer is 10, because + operator converter string to number
console.log(Number(str) + num); // same result 10
console.log(parseInt(str) + num); // same result 10

// tric-3, - operator die value ulte deya

const minus = -1;
console.log(-minus); // The answer is 1, because minase minase olus

// tric-4. শর্টকার্ট কন্ডিশন (Short-circuit Evaluation)
// if-else না লিখে খুব সহজে কন্ডিশনাল কোড চালানোর জন্য && এবং || ব্যবহার করা যায়:

const isLogged = true;
isLogged && console.log("Welcome"); // answer is welcome
// || (ডিফল্ট ভ্যালু সেট করতে):

const name = "";
const user = name || "Guest";
console.log(user); // answer is guest.

// tric-5  অ্যারে থেকে ডুপ্লিকেট মান এক লাইনে রিমুভ করা (Set)

const number = [10, 20, 40, 20, 40, 60, 80, 90, 10];

const revobeDup = [...new Set(number)];
console.log(revobeDup); // answer is [ 10, 20, 40, 60, 80, 90 ]

// tric-6.  বুলিয়ানে কনভার্ট করা (!! ডাবল নট অপারেটর)
// কোনো ভ্যালু Truthy নাকি Falsy, তা চট করে বুলিয়ানে (true/false) রূপান্তর করতে এটি দারুণ কাজ করে:

console.log(!!"Hello");
console.log(!!2);
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// tric 7. ৫. অবজেক্ট থেকে ডেটা রিনেম করে নেওয়া (Destructuring Rename)
// অবজেক্ট থেকে ডেটা বের করার সময় সরাসরি নাম পরিবর্তন করে নেওয়া যায়:

const user1 = { name: "Saha", age: 35 };
const { name: userName } = user1;
console.log(userName); // answer is userName = "saha"

// tric-8. ৬. অ্যারের একদম শেষের আইটেম নেওয়া (at(-1))
// আগে অ্যারের শেষের উপাদান বের করতে arr[arr.length - 1] লিখতে হতো। এখন নতুন at() দিয়ে খুব সহজে পেছনের আইটেম নেওয়া যায়:

const fruits = ["Orange", "Apple", "Mango"];
const useAt = "JEWEL";
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1));
console.log(useAt.at(-1)); // answer is L
console.log(useAt.at(0)); // answer is J
console.log(useAt[0]);
console.log(useAt.charAt(useAt.length - 1));
console.log(useAt[useAt.length - 1]);

// tric-9. ১. Optional Chaining (?.) — অ্যাপ ক্র্যাশ হওয়া থেকে বাঁচানো
// অবজেক্টের ভেতরের কোনো প্রপার্টি যদি না থাকে, তবে সাধারণ নিয়মে Cannot read properties of undefined এরর দিয়ে পুরো অ্যাপ ক্র্যাশ করে। ?. ব্যবহার করলে এরর না দিয়ে সরাসরি undefined রিটার্ন করে।

const country = { name: "Bangladesh" };
// সাধারণ নিয়ম (এরর দেবে এবং অ্যাপ ক্র্যাশ করবে):
// console.log(user.address.city);
// console.log(country.address.city);
//  Optional Chaining (নিরাপদ)
console.log(country.address?.city);

// tric-10. ২. Nullish Coalescing Operator (??) — || এর চেয়ে নিখুঁত
// আমরা অনেকেই ডিফল্ট মান দেওয়ার জন্য || ব্যবহার করি। কিন্তু || মান 0 বা "" (খালি স্ট্রিং) হলেও সেটিকে মিথ্যা ধরে ভুল মান বসিয়ে দেয়। ?? শুধু null অথবা undefined হলেই কেবল ডানপাশের ডিফল্ট মান নেয়।
const score = 0;
const score1 = undefined;

console.log(score || 10); // 10 (কারণ 0 কে Falsy মনে করেছে, কিন্তু 0 তো একটা বৈধ স্কোর!)
console.log(score ?? 10); /// 0 (নিখুঁত! শুধু null/undefined পেলেই 10 নিত)
console.log(score1 ?? 10); // answer is 10

// tric-11 অবজেক্ট শর্টহ্যান্ড (Property Shorthand)
// যখন অবজেক্টের কী (key) এবং ভেরিয়েবলের নাম একই হয়, তখন দুইবার লেখার কোনো দরকার নেই!
const man = "Jewel";
const age = 35;

// পুরোনো নিয়ম:
const human = {
  man: man,
  age: age,
};
// আধুনিক নিয়ম:
const human1 = {
  man,
  age,
};
console.table(human1);

// tric-12. অ্যারে খালি করার দ্রুততম উপায় (length = 0)
// কোনো অ্যারেকে লুপ চালিয়ে বা নতুন করে খালি অ্যারে ডিক্লেয়ার না করে, তার length শূন্য করে দিলে আগের মেমরি রেফারেন্স ঠিক রেখেই মুহূর্তের মধ্যে অ্যারে খালি হয়ে যায়।

let numbers = [10, 20, 30, 40, 50];
numbers.length = 0;
console.log(numbers);

// tric-13. রেস্ট অপারেটর দিয়ে বাদ দিয়ে বাকি মানগুলো নেওয়া (Rest Parameter)
// অবজেক্ট বা অ্যারে ডিস্ট্রাকচার করার সময় নির্দিষ্ট কিছু মান বাদ দিয়ে বাকি সবগুলোকে একসাথে নতুন জায়গায় সেভ করে নেওয়া যায়।

const students = { id: 1001, name: "jewel", class: 6, city: "Cumilla" };
const restNumbers = [10, 20, 30, 40, 50];
const { id, ...rest } = students;
const [first, ...numRest] = restNumbers;
console.log(numRest);

// tric-14. Array.from() দিয়ে সহজে রেঞ্জ বা সিকোয়েন্স তৈরি করা
// ইন্টারভিউতে বা ডায়নামিক তালিকার জন্য যদি ১ থেকে ১০ বা ১ থেকে ১০০ এর একটি সংখ্যার অ্যারে চট করে বানাতে হয়, তবে লুপ না চালিয়ে Array.from() দিয়ে এক লাইনে করা যায়:

const ArrFrom = Array.from({ length: 500 }, (_, index) => index + 1);
console.log(ArrFrom);

// tric:15: অবজেক্টে কন্ডিশনাল প্রপার্টি যোগ করা (Conditional Object Property)
// কোনো শর্তের ওপর ভিত্তি করে অবজেক্টের ভেতরে একটা কী (Key) যোগ করতে চাইলে if-else না লিখে সরাসরি স্প্রেড অপারেটর (...) আর && ব্যবহার করা যায়:

const isAdmin = true;
const testUser = { name: "Saha", age: 36, ...(isAdmin && { role: "Admin" }) };
console.log(testUser);

// tric:16. অ্যারেকে দ্রুত র‍্যান্ডমাইজ বা উল্টাপাল্টা করা (Shuffle Array)
// কোনো লটারি, কুইজ বা কার্ড গেমের জন্য অ্যারের উপাদানগুলোকে চট করে এলোমেলো করতে sort() আর Math.random() ব্যবহার করা যায়:

const randomArray = [5, 3, 6, 8, 9, 7];
const shuffled = randomArray.sort(() => Math.random() - 0.5); //
console.log(shuffled);
console.log(Math.random());

// tric:17. স্ট্রিং রিভার্স (Reverse) করা ১ লাইনে
// ইন্টারভিউতে খুব জনপ্রিয় একটি প্রশ্ন—"একটি শব্দকে উল্টে (Reverse) দাও"। এটি ৩টি মেথড পরপর চেইন করে এক লাইনে করা যায়:

const stri = "React";
const reversed = stri.split("").reverse().join("");
console.log(reversed);

// tric 18: ডায়নামিক অবজেক্ট কী (Dynamic Object Keys)
// ভেরিয়েবলের ভেতরে থাকা টেক্সটকে সরাসরি অবজেক্টের কী (Key) হিসেবে ব্যবহার করতে থার্ড ব্র্যাকেট [] ব্যবহার করা হয়:

const dynamicName = "name";
const formData = { age: 24 };
const dynamicUser = {
  ...formData,
  [dynamicName]: "Saha",
};
console.log(dynamicUser); // answer is { age: 24, name: 'Saha' }

// tric:19. অ্যারের সব উপাদানকে নম্বর বানানো (Shortest Way)
// স্ট্রিংয়ের অ্যারে যেমন ["1", "2", "3"]-কে সরাসরি নম্বরের অ্যারে [1, 2, 3] বানাতে map(Number) ব্যবহার করা যায়:

const strArray = ["2", "3", "5"];
const numberArray = strArray.map(Number);
console.log(numberArray);

console.log(typeof Number);

// tric:20. ফাংশনের ডিফল্ট প্যারামিটার (Default Parameters)
// ফাংশনে যদি ইউজার কোনো আর্গুমেন্ট পাস না করে, তবে যেন undefined এসে অ্যাপ না ভাঙে, তার জন্য সমান চিহ্ন (=) দিয়ে আগে থেকেই ডিফল্ট মান বসিয়ে রাখা যায়:

function defaultPara(name = "Guest") {
  return name;
}
console.log(defaultPara("Jewel"));

// tric:21. flat() — নেস্টেড অ্যারে (Nested Array) এক সেকেন্ডে সোজা করা
// ধরুন একটি অ্যারের ভেতর আরও অ্যারে (Nested Array) আছে। আগে এটাকে সোজা করতে লুপ ঘুরিয়ে পাগল হতে হতো। এখন flat() দিয়ে এক লাইনে সব সমান করে ফেলা যায়:

const nestedLoop = [1, [2, 3], [8, 9, [7, 5]]];
const flat = nestedLoop.flat(Infinity);
console.log(flat);

console.log(Number.MAX_VALUE * 2);

// get minimun number
{
  const numbers = [45, 12, 89, 3, 27];
  let minNumber = Infinity;
  for (let num of numbers) {
    if (num < minNumber) {
      minNumber = num;
    }
  }
  console.log(minNumber);
}
//  get maximum value

{
  const numbers = [45, 12, 89, 3, 27];
  let maxValue = -Infinity;
  for (let num of numbers) {
    if (num > maxValue) {
      maxValue = num;
    }
  }
  console.log(maxValue);
}

// tric:22. Boolean মেথড দিয়ে অ্যারে থেকে ময়লা (Falsy values) সাফ করা
// অ্যারে থেকে null, undefined, 0, false, বা "" (খালি স্ট্রিং) ঝেড়ে ফেলে শুধু সঠিক ভ্যালুগুলো রাখতে filter(Boolean) দারুণ কাজ করে:

const dirtyArray = [0, "Jewel", "", undefined, "Saha", null, false, 100];
const filterDirty = dirtyArray.filter((item) => {
  return Boolean(!item);
});
console.log(filterDirty);

// tric:23. Object.freeze() বনাম Object.seal() — অবজেক্ট লক করা
// প্রজেক্টে কনফিগারেশন বা ইম্পর্টেন্ট অবজেক্ট যেন ভুল করে কেউ বদলে না ফেলে:

// Object.freeze() (পুরো বরফ!): নতুন কোনো প্রপার্টি যোগ, বিয়োগ বা ভেতরের মান পরিবর্তন—কিছুই করা যাবে না।

// Object.seal() (সিলগালা!): নতুন প্রপার্টি যোগ বা বিয়োগ করা যাবে না, তবে আগের প্রপার্টির মান পরিবর্তন করা যাবে।

{
  const user = {
    name: "Jewel",
    age: "36",
  };
  const freeze = Object.freeze(user);
  user.country = "Bd";
  console.log(user); // { name: 'Jewel', age: '36' }

  const user1 = {
    name: "Jewel",
    age: "36",
  };
  const seal = Object.seal(user1);
  user1.name = "saha";
  console.log(user1); // { name: 'saha', age: '36' }
}
