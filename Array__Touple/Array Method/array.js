// Array 
var myArray1 = [1, 2, 3, 5];
var yourArray1 = ["one", "Two"];
console.log(myArray1); // [ 1 , 2 , 3 , 4 ]
console.log(yourArray1); // [ "one" , "Two" ]
// Length Method
var Fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Fruits.length); // 4
// Push Method
var fruits1 = ["Banana", "Orange", "Apple"];
console.log(fruits1); //   ['Banana', 'Orange', 'Apple']
console.log(fruits1.push("Lemon")); //   4
console.log(fruits1); //   ['Banana', 'Orange', 'Apple', 'Lemon']
// Pop Method
var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.pop()); // Mango
console.log(fruits2); // ['Banana', 'Orange', 'Apple']
// Shift Method
var fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.shift()); // Banana
console.log(fruits3); // ['Orange', 'Apple', 'Mango']
// UnShift Method
var fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.unshift("Lemon")); // 5
console.log(fruits4); // ['Lemon', 'Banana', 'Orange', 'Apple', 'Mango']
// Changing Elements Method
var fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5[0] = "Kiwi";
console.log(fruits5); // Kiwi,Orange,Apple,Mango
// Merging(Concatenating) Method           concat
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
console.log(myGirls.concat(myBoys)); // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
console.log(arr1.concat(arr2, arr3)); // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan']
var arr4 = ["Emil", "Tobias", "Linus"];
console.log(arr4.concat("Peter")); // ['Emil', 'Tobias', 'Linus', 'Peter']
// Splice Method
var fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits6); // ['Banana', 'Orange', 'Apple', 'Mango']
console.log(fruits6.splice(2, 0, "Lemon", "Kiwi"));
console.log(fruits6); // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
// Slice Method
var fruits7 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits7.slice(1, 3)); // ['Orange', 'Lemon']
// Sort Method
var fruits8 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits8.sort()); // ['Apple', 'Banana', 'Mango', 'Orange']
// Reverse Method
var fruits9 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits9.sort().reverse()); // ['Orange', 'Mango', 'Banana', 'Apple']
// Entries Method
var fruits10 = ['a', 'b', 'c'];
var iterator1 = fruits10.entries();
console.log(iterator1.next().value); // [0, "a"]
console.log(iterator1.next().value); // [1, "b"]
// include Method
// const fruits11:string = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits11.includes("Mango"));                            // true
// CopyWithin Method
// const fruits12:string = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits12.copyWithin(2, 0));                        // Banana, Orange, Banana, Orange
// const fruits13:string = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits13.copyWitin(2, 0, 2));                      // Banana, Orange, Banana, Orange, Kiwi, Papaya
// Sort Method
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return a - b;
});
console.log(points); // [1, 5, 10, 25, 40, 100]
//  Max Method
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
var points1 = [40, 100, 1, 5, 25, 10];
console.log(myArrayMax(points1)); // 100
// Min Method
function myArrayMin(arr1) {
    return Math.min.apply(null, arr1);
}
var pointS2 = [40, 100, 1, -5, 25, 10];
console.log(myArrayMin(pointS2)); // -5
// ForEach Method
// const numbers:number[] = [45, 4, 9, 16, 25];
// let txt = "";
// const number21 = numbers.forEach(myFunction21);
// function myFunction21(value, index, array) {
// 	txt += value + " ";
// }
// console.log(number21);
// Map Method
var numbers1 = [45, 4, 9, 16, 25];
var numbers11 = numbers1.map(myFunction1);
function myFunction1(value, index, array) {
    return value * 2;
}
console.log(numbers11); // 90,8,18,32,50.
// Filter Method
var numbers3 = [45, 4, 9, 16, 25];
var over18 = numbers3.filter(myFunction2);
function myFunction2(value, index, array) {
    return value > 18;
}
console.log(over18); // [45, 25]
// Reduce Method
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(function (total, val) {
    return total + val;
}, 0);
console.log(sum); // 99
// ReduceRight Method
var numbers10 = [45, 4, 9, 16, 25];
var sum1 = numbers10.reduceRight(function (total, val) {
    return total + val;
}, 0);
console.log(sum1); // 99
// Every Method
var numbers14 = [45, 4, 9, 16, 25];
var allOver18 = numbers14.every(function (val) {
    return val > 18;
});
console.log(allOver18); // false
// Array Some MEthod
var numbers16 = [45, 4, 9, 16, 25];
var someOver18 = numbers16.some(function (val) {
    return val > 18;
});
console.log(someOver18); // true
// Find Method
var numbers18 = [45, 4, 9, 16, 25];
var first = numbers18.find(function (val) {
    return val > 18;
});
console.log(first); // 25
// Find Index Method
var numbers20 = [45, 4, 9, 16, 25];
var firstIndex = numbers20.findIndex(function (val) {
    return val > 18;
});
console.log(firstIndex);
// 3
