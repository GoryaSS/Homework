const langArray = [
  { value: "UA", label: "Ukranian" },
  { value: "RU", label: "Russian" },
  { value: "EN", label: "English" },
  123,
];

// langArray.push({ value: "PL", label: "Polish" });
// langArray.pop({ value: "PL", label: "Polish" });
// langArray.unshift({ value: "PL", label: "Polish" });
console.log(langArray.length);

const fetchNewArray = [
  { value: "PL", label: "Polish" },
  { value: "DE", label: "German" },
];

// for (let el of fetchNewArray) {
//     langArray.push(el)
// }

// langArray = langArray.concat(fetchNewArray)

const newLangArray = [
  { value: "FR", label: "French" },
  ...langArray,
  ...fetchNewArray,
];

// console.log("Old array:", langArray);
console.log("Changed array:", langArray.slice());

const str = "Hello";
console.log(str.slice(1));

let arr = [1, 2, 3, 4, 5, 6];

let newArr = arr.splice(2, 2);
console.log(arr);

// let o1 = {a: 1, b: 2}
// let o2 = {c: 3, a: 9}

// let o3 = {...o1, ...o2}
// let o3 = {...o2, ...o1}
// console.log(o3);

// let arr1 = [1,2,3,4,5,6]
// let arr2 = [1,2,3,4,5,6]
// let arr3 = [...arr1, ...arr2]
// console.log(arr3[0], arr3[6]);

// let o3 = {
//     a: 1,
//     a: 3
// }

// console.log(o3.a);

let arr1 = [1, 2, 3, 4, 5, 6];

let arr2 = arr1.reverse();
console.log(arr1);
console.log(arr2);

let arr4 = ["Aaaa", "Bbbb", "Cccc"];
console.log(arr4.join(" <--> "));

let arr1 = [1, 2, 3, 4, 5, 6];

// let arr2 = arr1.map((item) => item * 2);

let func = function (item) {
  return item * 2;
};

let ArrayNew = {
  items: [1, 2, 3, 4],
  map() {
    let temp = [];
    for (let el of this.items) {
      temp.push(el);
    }
    return temp.reverse();
  },
};

let s = "sdfsdf";

typeof s === "number" && s.length !== 0;

!isNaN();

let arrNew = ArrayNew.map();
let ffff = 100;

let ff = {};
console.log(typeof ff);

console.log(Array.isArray(ffff) && ffff.length > 0);

let arr1 = [1, 2, 3, 4, 5, 6];

let callBack = function (item, index) {
  let temp = item * 2;
  return `${index + 1}___${temp}`;
};

let arr2 = arr1.map(callBack);

console.log("Arr1: ", arr1);
console.log(`Arr2: `, arr2);

let arrStr = ["Dddd", "Cccc", "Aaaa"];

let arr1 = [1, 2, 3, 4, 5, 6, 1, 10, 22, 350];
let arr2 = arr1.filter((item) => item > 3);

console.log(arr2);

// console.log(arr1.sort());

const langArray = [
  { value: "UA", label: "Ukranian" },
  { value: "RU", label: "Russian" },
  { value: "EN", label: "English" },
  123,
];

let arr2 = langArray
//   .filter((item) => typeof item === "object")
  .filter((item) => ["UA" ,"EN"].includes(item.value))
//   JDasnjasdkjasdk
  .map((item) => item.value)
//   slksfksd;fksdfopds
  .sort();
console.log(arr2);



let ss = langArray.find((item)=>item.value === "UA")
console.log(ss);
