// Normal Function
function myFunction(a, b) {
    return a * b;
}
console.log(myFunction(2, 5)); // 10
var x = function (a, b) {
    return a * b;
};
var z = x(4, 3);
console.log(z); // 12
// Function Constructor
// const mFunction = new Function("a", "b", "return a * b");
// let x1 = mFunction(4, 3); 
// console.log(x1);                                   // 12
// Function Hoisting
function myFunction10(y) {
    return y * y;
}
console.log(myFunction10(5)); // 25
// Arrow Function
// ES5
var x2 = function (x, y) {
    return x * y;
};
console.log(x2(10, 5)); // 50
// ES6
var x3 = function (x, y) { return x * y; };
console.log(x3(12, 9)); // 108
// Function are Object
function myFunction22(a, b) {
    return arguments.length;
}
var text = myFunction22(4, 3);
console.log(text); // 2
function myFunction23(a, b) {
    return a * b;
}
var text2 = myFunction23(4, 3).toString();
console.log(text2); // 12
// Function Rest Parameters
// function sum2(...args) {
//     let sum = 0;
// for (let arg of args) 
//                 sum += arg;
// return sum2;
// }
// let x4 = sum2(4, 9, 16, 25, 29, 100, 66, 77); 
// console.log(x4);                                                // 326
// Arguments Object
// function sumAll() {
// 		let sum = 0;
// 		for (let i = 0; i < arguments.length; i++) {
// 					sum += arguments[I];
// 		}
// 		return sum;
// }
// let x5 = sumAll(1, 123, 500, 115, 44, 88);           // 871
// Generator Function
// function* generate() {
//     yield 1;
//     yield 2;
//     return 3;
// }    
// let generator = generate();
// console.log(generator.next().value);            // 1
// console.log(generator.next().value);            // 2
// console.log(generator.next().value);            // 3
// This KeyWord
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName : function abc() 
//     {
//         return this.firstName + " " + this.lastName;
//     }
// };      
// console.log(person);                                                // John Doe
// call() Method
var person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
var person1 = {
    firstName: "John",
    lastName: "Doe"
};
var person2 = {
    firstName: "Mary",
    lastName: "Doe"
};
console.log(person.fullName.call(person1)); // John Doe
// apply() Method
var person3 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
var person4 = {
    firstName: "John",
    lastName: "Doe"
};
console.log(person.fullName.apply(person4)); // John Doe
// bind() Method
var person5 = {
    firstName: "John",
    lastName: "Doe",
    fullName1: function () {
        return this.firstName + " " + this.lastName;
    }
};
var member = {
    firstName: "Hege",
    lastName: "Nilsen",
};
console.log(person5.fullName1.bind(member)); // Hege Nilsen
