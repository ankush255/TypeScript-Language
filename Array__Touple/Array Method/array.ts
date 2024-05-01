
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

const fruits11:string = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits11.includes("Mango"));                            // true





// CopyWithin Method

// const fruits12:string = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits12.copyWithin(2, 0));                        // Banana, Orange, Banana, Orange


// const fruits13:string = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits13.copyWitin(2, 0, 2));                      // Banana, Orange, Banana, Orange, Kiwi, Papaya







