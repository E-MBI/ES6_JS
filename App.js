// let test = () => (document.getElementById("show").innerHTML = this);

// //window call function that represent THIS value
// window.onload = test;
// //bUttom  call function that represent THIS value
// document.querySelector('button[type="submit"]').addEventListener("click", test);

// *********** Let & const & var **************
/*
#Var
- Redeclaring
- can be accessed before declaring 
- when Accessed before declaring Return Undifined
- Function Scoop.
- Create Properties in Window Object 
#Let
- Can not Redeclaring
- can not accessed before declaring
- when Accessed before declaring Return Refrence Errors
- Blocking Scoop
- Don't Create Properties in Window Object 
#Const
- Can not Redeclaring
- can not accessed before declaring
- when Accessed before declaring Return Refrence Errors
- Blocking Scoop
- Don't Create Properties in Window Object 



// *********** Arrow Function & this Value**************

*/

// function Person() {
//   this.age = 0;

//   setInterval(() => {

//     this.age++;
//     console.log(this.age);
//   }, 1000);
// }

// let user = new Person();

// *********** Template Literals **************
//`${var}`
// let Gender = "Male";

// let Message = `Hello ${
//   Gender === "Male" ? "Mr" : "Mrs"
// }: Mahmoud,you are is very interested person for us and you is good Gest `;

// console.log(Message);

// *********** ... Spared Operator  **************

// let arrone = [1, 2, 3, 4, 5];

// let arrtwo = [6, 7, 8, 9, 10];

// let newCollectionArray = [...arrone, ...arrtwo];

// console.log(newCollectionArray);

// //function sum numbers

// function sum(x, y, z) {
//   return x + y + z;
// }
// const nums = [1, 2, 3];
// console.log(...nums);
// console.log(sum(...nums));

//coping array
// let arrone = [1, 2, 3, 4, 5];
// let arrtwo = [...arrone];
// arrtwo.push(6);
// console.log(arrtwo);

// let arrone = [1, 2, 3, 4, 5];
// console.log(Math.min(...arrone));
// console.log(Math.max(...arrone));

// function SayHello(
//   UserName = "Defualt User",
//   Role = "Defualt Role ",
//   Theme = "Defualt Theme"
// ) {
//   return `Hello ${UserName},Your Roles is :${Role},Website Theme is : ${Theme}`;
// }
// console.log(SayHello());
// console.log(SayHello("Osama", "instructor Web Development"));
// console.log(SayHello("Mahmoud", "Software Engineer", "DarkMood"));

// **************************************
//Rest Parameter

// function AddAll(...params) {
//   let Start = 0;
//   for (let param of params) Start += param;
//   return Start;
// }
// console.log(AddAll(1, 2, 3, 4, 10));

// *******************Lesson 10 *****************************
// let x = "Hello My Dear Client , I'am Mahmoud Ebrahim";
// console.log(x.toLocaleLowerCase().startsWith("my", 6));
// console.log(x.toLocaleLowerCase().endsWith("ebrahim"));

// *******************Lesson 11 *****************************
// Includes & Reap

// let x = "Hello My Dear Client , I'am Mahmoud Ebrahim";
// console.log(x.includes("Dear", 20));
// console.log("x".repeat(15));
// console.log(`${x + "\n"}`.repeat(5));

// *******************Lesson 12 *****************************
// Destructuring
/*
- Object
- Array
- Parameter
*/

// #Object
// ***************
// const UserInfo = {
//   name: "Mahmoud",
//   Age: 24,
//   Gender: "Male",
//   Countery: "Egypt",
//   City: "Alex",
//   Theme: "balck",
//   Langs: {
//     Html: "80%",
//     Css: "90%",
//     Js: "70%",
//   },
// };

// let { name: n, Age: A, Gender: G, Theme: Th = "Default" } = UserInfo;
// console.log(`my name is :${n} and my age is : ${A} and Gender is : ${G} `);

// let { Html, Css, Js } = UserInfo.Langs;
// console.log(` progress is :${Html} and Css progress is :${Css} `);

// looping => for key's and values in Es6
// for (let key of Object.keys(UserInfo.Langs)) {
//   console.log(key, UserInfo.Langs[key]);
// }

// #*******************************************
// looping => for key's and values in Es8
// Object.entries(UserInfo.Langs).forEach(([k, v]) => {
//   console.log(` ${k} : ${v}`);
// });

// #Array
// ***************

// const Food = [
//   "Burger",
//   "Machroom",
//   "Meat",
//   ["Apple", "Mango", "Banana", "Pinapple"],
// ];

// let [one, two, three, [fr1, fr2, fr3, fr4 = "Default"]] = Food;
// console.log(
//   `My Favorite Food Is : "${one} With ${three}" & Soup of "${two}"
//   # And My Favorite Fruits is
//   "${fr1}" ,"${fr2}" ,"${fr3}" ,"${fr4}" `
// );

// const Fruits = [
//   "Apple",
//   "Banana",
//   "kantalop",
//   "PationFruite",
//   "Avogato",
//   "BlueBerry",
// ];

// let [one, two, , ...otherFruits] = Fruits;

// console.log(` My Favorit Fruits "${one}"|"${two}"|"${otherFruits}"`);

//Swaping variables with array Destructuring

// let book = "Video",
//   video = "Book";

// //Swaping variables
// [book, video] = [video, book];
// console.log(`Book is ${book} and Video is ${video}`);

// *******************************************

// const UserInfo = {
//   UserName: "Mahmoud",
//   Age: 24,
//   City: "Alex",
//   Skills: {
//     Html: "80%",
//     Css: "85%",
//     Js: {
//       Vue: "Vue.js",
//       Angular: "Angular.js",
//       React: "React.js",
//     },
//   },
// };
//Destructuring Advanced Object;
// const {
//   UserName,
//   Age,
//   City,
//   Skills: {
//     Html,
//     Css,
//     Js: { Vue, Angular, React },
//   },
// } = UserInfo;

// console.log(`My name is ${UserName} , and I live in ${City}`);
// console.log(`My Html Skills is ${Html} , and My Css Skills ${Css}`);
// console.log(
//   `I have Good Knowledge in Js FrameWorks like ${Vue} , ${Angular}, ${React} `
// );

//Destructuring  Function;

// function ShowInfo({
//   UserName,
//   Age,
//   City,
//   Skills: {
//     Html,
//     Css,
//     Js: { Vue, Angular, React },
//   },
// }) {
//   console.log(`My name is ${UserName} and My Age is ${Age} Years old`);
//   console.log(`I Live in ${City} and my Html skill is ${Html} `);
//   console.log(`my Css skill is ${Css} `);
//   console.log(
//     ` I have Knowlege in js FrameWorks like  ${Vue} ,${Angular},${React} `
//   );
// }
// ShowInfo(UserInfo);

//Enhanced Object literals
/*
- Property Shorthand 
- Methods  Shorthand
- Computed Object Property Name  
*/
// const UserName = "Mahmoud",
//   key = "valeo";

// const User = {
//   UserName,
//   key,
// };

// Object.entries(User).forEach(([el, val]) => {
//   console.log(`${el} : ${val}`);
// });

//  const User = {
//   meMethod(param) {
//     return param;
//   },
// };
// console.log(User.meMethod("Hello From js method "));

// let myVar = "Mahmoud";

// const User = {
//   myVar: "software Engineer",
// };

// console.log(User.myVar);

// *************************************
// Set
/*
- Set Syntax
- Get a Unique Array From Another UnUnique
*/

// let Array = [1, 2, 3, 4, 4, 5, 5, 6, 6];
// const MySet = new Set(Array);
// let MyUniqueArray = [...MySet];
// console.log(Array); //[1, 2, 3, 4, 4, 5, 5, 6, 6]
// console.log(MyUniqueArray); //[1, 2, 3, 4, 5, 6]

//Map
// let map = new Map([
//   [10, "number"],
//   [function () {}, "function"],
//   [10, "Number"],
//   [true, "Boolean"],
//   //object
//   [{ a: 1, b: 2, c: 3 }, "object"],
// ]);

// console.log(map);
// console.log(map.size);

//Symbols Part one

// const mySymbolOne = Symbol("test");
// const mySymbolTwo = Symbol("test");
// console.log(typeof mySymbolOne);
// mySymbolOne === mySymbolTwo ? console.log(true) : console.log(false);

// *************************************************************

// let Sb = Symbol();
// let Obj = {
//   user: "mahmoud",
//   city: "cario",
//   [Sb]: "cario", //will hidden from iteration of  looping
// };

// for (const [key, val] of Object.entries(Obj)) {
//   console.log(key, ":", val);
// }

// const SymbolOne = Symbol.for("one");
// const SymbolTwo = Symbol.for("two");

// console.log(SymbolOne === SymbolTwo);
// console.log(SymbolOne.description);
// console.log(Symbol.keyFor(SymbolTwo));

// **************************************************
// const mySet = new Set([1, 1, 2, 2, 3, 4, 4, 5, 6]);
// mySet.forEach((item) => {
//   console.log(item);
// });

// **************************************************
//Froeach with map
// let myMap = new Map([
//   ["A", 1],
//   ["c", 3],
//   ["B", 2],
// ]);

// myMap.forEach((v, k) => {
//   console.log(`${k} => ${v}`);
// });

// ****************************************
// let objFour = { D: 4 };
// const weakset = new WeakSet([{ A: 1 }, { B: 2 }, { C: 3 }]);
// weakset.add(objFour);
// console.log(weakset);
// console.log(weakset.delete(objFour));
// console.log(weakset.has(objFour));
// console.log(weakset);

// ************************************************
//Iterator & Iterable & for fo loop

// # Iterable => Object Has Symbol iterator
/* 
  # Iterator => 
   - Object with interface  is designed  for iteration 
   - All iterator Has Next () Method that return resulate  Object that return Two props 
   - value => next value ;
   - Done  => Boolean value that return value that tell you if next value is Exist or no ;
  #for of loop =>
   - call symbol.iterator with NEXT () Method 
   - save the value inside varaible 
   - check value Done if next value is true => breaking || Exit  for loop 
*/

//STERING => Work
// let myName = "mahmoud";
// for (const i of myName) {
//   console.log(i);
// }

// $$$$$$$$$$$$$$$$$$$$$$$$

//NUMBER => Not Work
// let myNum = 1000;
// for (const i of myNum) {
//   console.log(i); //IS NOT Iterable
// }

// $$$$$$$$$$$$$$$$$$$$$$$$

// ARRAY => Work
// let myArray = [1, 2, 3, 4];
// for (const i of myArray) {
//   console.log(i);
// }

// $$$$$$$$$$$$$$$$$$$$$$$$
// Object => Not Work
// let myObj = { A: 1, B: 2, C: 2 };
// for (const i of myObj) {
//   console.log(i); //IS NOT Iterable
// }

// ********************************************
// # Custom Iterable Object
// ************************

// let myObject = {
//   Name: "mahmoud",
//   Age: 24,
//   Country: "Egypt",
//   FavSkill: ["js", "html", "css"],
//   [Symbol.iterator]() {
//     let setp = 0;
//     let Properties = Object.keys(this);
//     return {
//       next() {
//         return {
//           value: myObject[Properties[setp]],
//           done: setp++ === Properties.length,
//         };
//       },
//     };
//   },
// };

// for (const prop of myObject) {
//   console.log(prop);
// }

// ********************************************
// # Genrators Part 1
// ************************

// function* GenrateTickets() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// }

// let iterator = GenrateTickets();

// console.log(typeof iterator);

// console.log(iterator.next());
// console.log(iterator.next().value);

// let NumberTeckets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function* GenrateTickets(x) {
//   for (let i = 0; i < x.length; i++) {
//     const el = x[i];
//     yield el;
//   }
// }

// let genrator = GenrateTickets(NumberTeckets);
// console.log(genrator.next().value);
// console.log(genrator.next().value);
// console.log(genrator.next().value);
// console.log(genrator.next().value);
// console.log(genrator.next().value);

// function* Skills() {
//   yield* ["mahmoud", "Ebrahim", "Eman"];
// }

// let Skillss = Skills();

// // #looping over genration Function
// for (const skill of Skillss) {
//   console.log(skill);
// }

// console.log("#".repeat(15));

// // #looping Over Iteration
// for (const skill of Skills()) {
//   console.log(skill);
// }

// ************************************************
// # Delegating Genrators
// function* GenrateNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* GenrateStrings() {
//   yield "Mahmoud";
//   yield "Yoyo";
//   yield "Ebrahim";
// }

// function* GenrateAll() {
//   yield* GenrateNumbers();
//   yield* GenrateStrings();
// }

// let GenAll = GenrateAll();

// console.log(GenAll.next());
// console.log(GenAll.next());
// console.log(GenAll.next());
// console.log(GenAll.next());
// console.log(GenAll.next());
// console.log(GenAll.next());
// console.log(GenAll.next());

// ************************************************
// # New Array Methods

// const OldArr = Array(100);
// console.log(OldArr); //100 element is empty
// console.log(OldArr.length);

// +++++++++++++++++++++

// const ArrOf = Array.of(100, 200);
// console.log(ArrOf); //100 element is empty
// console.log(ArrOf.length);

// +++++++++++++++++++++
// let name = "mahmoud";
// let arrFrom = Array.from(name);
// console.log(arrFrom);
// const arrNums = [15, 20, 45, 50, 90, 100, 152, 78, 120];
// let arrNumMinusTen = Array.from(arrNums, (num) => num - 10);
// console.log(arrNumMinusTen);
// +++++++++++++++++++++
// const arrNums = [15, 20, 45, 50, 90, 100, 152, 78, 120];
// arrNums.fill(100, 2, 4);
// console.log(arrNums);
// +++++++++++++++++++++
// # CopyWithin array methods
// const arrNums = [15, 20, 50, 50, 50, 90, 100, 152, 78, 120];
// arrNums.copyWithin(1, 6, 8);
// console.log(arrNums);

// let arrString = ["A", "B", "C", "D", "E", "F", "G", "H"];
// arrString.copyWithin(1, 5, 7);
// console.log(arrString);

// import * as All from "./main.js";
// import sayH from "./main.js";

// console.log(sayH);
// console.log(All.myName);
// console.log(All.Add(All.arr));

// console.log(sayH.Age);
// console.log(sayH.countery);
// console.log(sayH.name);

// ********************************************
// // # Lesson_41//Classes & OOP Part 1

// class User {
//   //create Properties
//   constructor(id, name, age) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//   }
//   //create Methods
//   showInfo() {
//     console.log(`Hello Mr ${this.name} Your Age is ${this.age}`);
//   }
//   CalcAge() {
//     console.log(` Your Age in Day's = ${this.age * 365}`);
//   }
// }

// const FristUser = new User(1254, "Mahmoud Ebrahim", 24);
// FristUser.showInfo();
// FristUser.CalcAge();

// import User from "./main.js";

// class Admin extends User {
//   constructor(name, mail, age) {
//     super(mail, name, age);
//   }
// }

// let FristAdmin = new Admin("mahmoud", "mahmoudebr3heem10@gmail.com", 24);
// FristAdmin.showInfo();
// FristAdmin.CalcAge();
// console.log(FristAdmin.name);
// console.log(FristAdmin.mail);
// console.log(FristAdmin.age);
// let resolved = (resolve) => console.log(resolve);
// let rejected = (reject) => console.log(reject);

// const myPromise = new Promise((resolve, reject) => {
//   let connect = true;
//   if (connect) {
//     resolve("Connection Established");
//   } else {
//     reject(Error("Connection Filed"));
//   }
// }).then(resolved, rejected);

// **********************************
//# Request without pormise

// let request = new XMLHttpRequest();

// request.onreadystatechange = () => {
//   if (this.readyState === 4 && this.Status == 200) {
//     console.log(this.responseText);
//     let JsObj = JSON.parse(this.responseText);
//     console.log(JsObj);
//   }
// };

// request.open(
//   "GET",
//   "https://api.github.com/users/Eng-MahmoudEbrahem/repos",
//   true
// );
// request.send();

// **********************************
//# Request with pormise
// const GetFirstRepo = (apiUrl) => {
//   return new Promise((res, rej) => {
//     let Request = new XMLHttpRequest();

//     Request.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         res(JSON.parse(this.responseText)[0].name);
//       } else {
//         rej(Error(this.statusText));
//       }
//     };

//     Request.open("GET", apiUrl, true);
//     Request.send();
//   });
// };

// GetFirstRepo("https://api.github.com/users/Eng-MahmoudEbrahem/repos").then(
//   (res) => {
//     let newDiv = document.createElement("div");
//     let divText = document.createTextNode(res);
//     newDiv.appendChild(divText);
//     document.body.appendChild(newDiv);
//   },
//   (rej) => console.log(rej)
// );

// **********************************
//# Assignemnt over pormise

// let myPromise = new Promise((resolve, reject) => {
//   let myPosts = ["A", "B", "C", "D", "E", "F", "G", "H"];
//   resolve(myPosts);
// })
//   .then((result) => {
//     console.log(`Total Number Of Posts Is ${result.length}`);
//     return result;
//   })
//   .then((result) => {
//     console.log(`The First Posts Is ${result[0]}`);
//     return result;
//   })
//   .then((result) => {
//     console.log(`The last Posts Is ${result[result.length - 1]}`);
//     return result;
//   })
//   .then((result) => {
//     console.log(`Number of post in page is 2`);
//     console.log(`Appliction Has ${result.length / 2} Pages`);
//   });

// **********************************
//# Fetch

// fetch("https://api.github.com/users/Eng-MahmoudEbrahem/repos")
//   .then((result) => {
//     let AllRepos = result.json();
//     console.log(AllRepos);
//     return AllRepos;
//   })
//   .then((repos) => {
//     console.log(repos[0].name);
//     console.log(repos.length);
//     console.log(repos[repos.length - 1].name);
//     return repos;
//   })
//   .then((repos) => {
//     for (let i = 0; i < repos.length; i++) {
//       const el = repos[i].name;
//       let div = document.createElement("div");
//       let divText = document.createTextNode(el);
//       div.appendChild(divText);
//       document.body.append(div);
//     }
//   });

// **********************************
//# all & race promise
// const myFirstPromise = new Promise((resolve, reject) => {
//   let connect = true;
//   if (connect) {
//     resolve("First Promise Resolve");
//   } else {
//     reject("First Promise reject");
//   }
// }).then((result) => {
//   setTimeout(() => {
//     console.log(result);
//   }, 100);
// });

// const mySecondPromise = new Promise((resolve, reject) => {
//   let connect = true;
//   if (connect) {
//     resolve("Second Promise Resolve");
//   } else {
//     reject("Second Promise reject");
//   }
// }).then((result) => {
//   setTimeout(() => {
//     console.log(result);
//   }, 500);
// });

// Promise.all([myFirstPromise, mySecondPromise]);

// const myFirstPromise = new Promise((resolve, reject) => {
//   window.setTimeout(() => {
//     resolve("First Promise Resolve");
//   }, 500);
// });

// const mySecondPromise = new Promise((resolve, reject) => {
//   window.setTimeout(() => {
//     resolve("Second Promise Resolve");
//   }, 100);
// });
// Promise.race([myFirstPromise, mySecondPromise]).then((res) => {
//   console.log(res);
// });
