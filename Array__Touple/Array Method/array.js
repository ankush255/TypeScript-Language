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
var fruits11 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits11.includes("Mango")); // true
// CopyWithin Method
var fruits12 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits12.copyWithin(2, 0)); // Banana, Orange, Banana, Orange
var fruits13 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits13.copyWitin(2, 0, 2)); // Banana, Orange, Banana, Orange, Kiwi, Papaya
