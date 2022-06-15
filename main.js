// export { Add, arr, myName };

// let arr = [1, 2, 3, 4, 5, 6];

// function Add(arr) {
//   let newarr = arr.map((el) => {
//     return el + 2;
//   });

//   return newarr;
// }
// Add(arr);

// let myName = "mahmoud";

// export default function sayHello() {
//   return `hello form main file ya mhmaah :)`;
// }

// let object = {
//   name: "mahmoud",
//   countery: "Egypt",
//   Age: 24,
// };

// export default object;

// ********************************************
// # Lesson_41//Classes & OOP Part 1
class User {
  //create Properties
  constructor(mail, name, age) {
    this.mail = mail;
    this.name = name;
    this.age = age;
  }
  //create Methods
  showInfo() {
    console.log(`Hello Mr ${this.name} Your Age is ${this.age}`);
  }
  CalcAge() {
    console.log(` Your Age in Day's = ${this.age * 365}`);
  }
}

export default User;
