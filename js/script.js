// "use strict"
// let a = -15;

// let b = a ?? "No value";
// let b = a >= 0 ? "musbet" : a == 0 ? "Sifir" : "menfi";
// console.log(b);
// var c = 10;

// if (true) {
//     var b = 20;
//     let f = 2;
// }

// console.log(b);
// console.log(f);
// var a = 3;
// var a = 5;

// a = 20;
// console.log(a);
// let a;

// function ShowMessage(message) {
//     return message;
// }

// console.log(ShowMessage("Hello p101"));


// let ShowMessage = function (message) {
//     return message;
// }

// var ShowMessage = function (message) {
//     return message;
// }

// var ShowMessage = function (a, b) {
//     return a + b;
// }



// const ShowMessage = message => message;

// const Sum = (a, b) => {
//     let c = a + b;
//     return c;
// };


// console.log(ShowMessage("Hello p101"));

// function MyCallback(age, Eligible, NotEligible) {
//     if (age >= 18) {
//         let Name = prompt("Enter your name:").trim();
//         Eligible(Name != "" ? Name : "No name");
//     } else {
//         let Name = prompt("Enter your name:");
//         NotEligible(Name != "" ? Name : "No name");
//     }
// }

// function EligibleMethod(name = "No name") {
//     console.log(name + " - Congratulations! You can enter the University");
// }

// function NotEligibleMethod(name = "No name") {
//     console.log(name + " - Unfortunatelly You can not enter the University");
// }

// MyCallback(25, EligibleMethod, NotEligibleMethod);

// let stu1 = {
//     Name: "Rasim",
//     Surname: "Abbasov",
//     Age: 22,
//     Phone: "13248613",
//     Email: "rasim@gmail.com",
//     Fullinfo: function () {
//         console.log(`${this.Name} ${this.Surname} ${this.Email}`);
//     }
// }

// console.log(stu1.Name + " " + stu1.Surname);
// stu1.Fullinfo();

// function Student(Name, Surname, Age, Email, Phone) {
//     this.name = Name;
//     this.surname = Surname;
//     this.age = Age;
//     this.email = Email;
//     this.phone = Phone;
//     this.fullinfo = function () {
//         console.log(this.name + " " + this.surname);
//     }
// };


// let stu2 = new Student("Rasim", "Abbasov", 25, "rasim@gmail.com", "132654");
// let stu3 = new Student("Qasim", "Quliyev", 21, "qasim@gmail.com", "984653");

// // console.log(stu2.name);
// // console.log(stu3.name);

// stu2.fullinfo();

// class Student {
//     constructor(Name, Surname, Age, Email, Phone) {
//         this.name = Name;
//         this.surname = Surname;
//         this.age = Age;
//         this.email = Email;
//         this.phone = Phone;
//     }

//     Fullinfo = function () {
//         console.log(`${this.name} ${this.surname} ${this.email}`);
//     }
// }


// let stu4 = new Student("Rasim", "Abbasov", 25, "rasim@gmail.com", "132654");

// stu4.Fullinfo();

// let fruit = [];
// fruit[0] = "Apple";
// fruit[1] = "Pear";
// fruit[2] = 15;
// fruit[3] = true;
// fruit.push(46);

// console.log(fruit[3]);

// fruit.forEach(element => {
//     console.log(element)
// });

// let ages = [];
// ages.push(15);
// ages.push(37);
// ages.push(24);
// ages.push(75);
// ages.push(32);
// ages.unshift(7);
// ages.pop();
// ages.shift();

// console.log(ages.pop());
// let a = ages.pop();

// ages.unshift(ages.pop());

// console.log("------------------------");

// let newAges = ages.splice(1, 2);
// let newAges = ages.slice(1, 3);

// let newArr = [34, 41, 62];
// ages = ages.concat(newArr);


// console.log(ages);



// for (let i = 0; i < ages.length; i++) {
//     console.log(ages[i]);
// }

// console.log("--------------");
// for (let i = 0; i < newAges.length; i++) {
//     console.log(newAges[i]);
// }

// Array methods
let ages = [];
ages.push(15);
ages.push(37);
ages.push(24);
ages.push(75);
ages.push(24);
ages.push(32);
ages.push(79);
// ages.forEach(function (item, index, array) {
//     // console.log(index + "-" + item);
//     console.log(array);
// })

// console.log(ages.indexOf(24, 3));
// console.log(ages.lastIndexOf(24, 5));
// console.log(ages.includes(33));

// console.log(ages.find(item => item > 65));
// console.log(ages.findIndex(item => item > 65));

let newArr = ages.filter(item => item > 65);
console.log(newArr)