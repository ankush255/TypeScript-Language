
// Array 

let myArray1:number[] = [1,2,3,5];
let yourArray1:Array<string> = ["one", "Two"];

console.log(myArray1);             // [ 1 , 2 , 3 , 4 ]
console.log(yourArray1);           // [ "one" , "Two" ]





// Length Method

const Fruits:string[] = ["Banana", "Orange", "Apple", "Mango"];
console.log(Fruits.length);                                         // 4





// Push Method

const fruits1:string[] = ["Banana", "Orange", "Apple"];
console.log(fruits1);                                            //   ['Banana', 'Orange', 'Apple']
console.log(fruits1.push("Lemon"));                              //   4
console.log(fruits1);                                            //   ['Banana', 'Orange', 'Apple', 'Lemon']





// Pop Method

const fruits2:string[] = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.pop());                                      // Mango
console.log(fruits2);                                            // ['Banana', 'Orange', 'Apple']





// Shift Method

const fruits3:string[] = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.shift());                                     // Banana
console.log(fruits3);                                             // ['Orange', 'Apple', 'Mango']





// UnShift Method

const fruits4:string[] = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.unshift("Lemon"));                            // 5
console.log(fruits4);                                             // ['Lemon', 'Banana', 'Orange', 'Apple', 'Mango']





// Changing Elements Method

const fruits5:string[] = ["Banana", "Orange", "Apple", "Mango"];
fruits5[0] = "Kiwi";                                          
console.log(fruits5);                                             // Kiwi,Orange,Apple,Mango





// Merging(Concatenating) Method           concat

const myGirls:string[] = ["Cecilie", "Lone"];
const myBoys:string[] = ["Emil", "Tobias", "Linus"];
console.log(myGirls.concat(myBoys));                     // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']


const arr1:string[] = ["Cecilie", "Lone"];
const arr2:string[] = ["Emil", "Tobias", "Linus"];
const arr3:string[] = ["Robin", "Morgan"];
console.log(arr1.concat(arr2, arr3));                    // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan']


const arr4:string[] = ["Emil", "Tobias", "Linus"];
console.log(arr4.concat("Peter"));                       // ['Emil', 'Tobias', 'Linus', 'Peter']





// Splice Method

const fruits6:string[] = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits6);                                     // ['Banana', 'Orange', 'Apple', 'Mango']
console.log(fruits6.splice(2, 0, "Lemon", "Kiwi"));      
console.log(fruits6);                                    // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']





// Slice Method

const fruits7:string[] = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits7.slice(1, 3));                          // ['Orange', 'Lemon']





// Sort Method

const fruits8:string[] = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits8.sort());                              // ['Apple', 'Banana', 'Mango', 'Orange']





// Reverse Method

const fruits9:string[] = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits9.sort().reverse());                    // ['Orange', 'Mango', 'Banana', 'Apple']





// Entries Method

const fruits10:string[] = ['a', 'b', 'c'];
const iterator1 = fruits10.entries();
console.log(iterator1.next().value);                                // [0, "a"]
console.log(iterator1.next().value);                                // [1, "b"]





// include Method

// const fruits11:string = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits11.includes("Mango"));                            // true





// CopyWithin Method

// const fruits12:string = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits12.copyWithin(2, 0));                        // Banana, Orange, Banana, Orange


// const fruits13:string = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits13.copyWitin(2, 0, 2));                      // Banana, Orange, Banana, Orange, Kiwi, Papaya






// Sort Method

const points = [40, 100, 1, 5, 25, 10];

points.sort(function(a:number, b:number):number{
				return a - b;
});
console.log(points);                                       // [1, 5, 10, 25, 40, 100]





//  Max Method

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

const points1:number[] = [40, 100, 1, 5, 25, 10];
console.log(myArrayMax(points1));                         // 100





// Min Method

function myArrayMin(arr1) {
    return Math.min.apply(null, arr1);
}


const pointS2:number[] = [40, 100, 1, -5, 25, 10];
console.log(myArrayMin(pointS2));                       // -5





// ForEach Method

// const numbers:number[] = [45, 4, 9, 16, 25];
// let txt = "";
// const number21 = numbers.forEach(myFunction21);
// function myFunction21(value, index, array) {
// 	txt += value + " ";
// }
// console.log(number21);





// Map Method

const numbers1:number[] = [45, 4, 9, 16, 25];
const numbers11 = numbers1.map(myFunction1);

function myFunction1(value, index, array) {
	return value * 2;
}
console.log(numbers11);                             // 90,8,18,32,50.





// Filter Method

const numbers3:number[] = [45, 4, 9, 16, 25];
const over18 = numbers3.filter(myFunction2);

function myFunction2(value, index, array) {
	return value > 18;
}
console.log(over18);                                 // [45, 25]





// Reduce Method

const numbers:number[] = [45, 4, 9, 16, 25];
const sum = numbers.reduce(function (total, val){
			return total + val;
}, 0);
console.log(sum);                                              // 99





// ReduceRight Method

const numbers10:number[] = [45, 4, 9, 16, 25];
const sum1 = numbers10.reduceRight(function (total, val){
			return total + val;
}, 0);
console.log(sum1);                                            // 99





// Every Method

const numbers14:number[] = [45, 4, 9, 16, 25];
const allOver18 = numbers14.every(function (val){
			return val > 18;
});
console.log(allOver18);                                     // false





// Array Some MEthod

const numbers16:number[] = [45, 4, 9, 16, 25];
const someOver18 = numbers16.some(function (val){
			return val > 18;
});
console.log(someOver18);                                  // true





// Find Method

// const numbers18:number[] = [45, 4, 9, 16, 25];
// const first = numbers18.find(function (val:number){
// 			return val > 18;
// });
// console.log(first);                                       // 25





// Find Index Method

// const numbers20:number[] = [45, 4, 9, 16, 25];
// const firstIndex = numbers20.findIndex(function (val:number){
// 			return val > 18;
// });
// console.log(firstIndex);
// 3











