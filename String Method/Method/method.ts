// Length Method

let abNumber:string = "Hello World";
console.log(abNumber.length);                       // 11





// Slice Method

let abName:string = "Apple,Banana,Orange";
console.log(abName.slice(6,15));                      // Banana,Or
console.log(abName.slice(6));                         // Banana,Orange
console.log(abName.slice(-13));                       // Banana,Orange
console.log(abName.slice(-13,-7));                    // Banana





// Substring Method

let abNa:string = "Apple,Banana,Orange";
console.log(abNa.substring(6,15));                        // Banana,Or





// Substr Method

let abcName:string = "Apple,Banana,Kiwi";
console.log(abcName.substr(2,10));                       // ple,Banana
console.log(abcName.substr(7));                          // anana,Kiwi
console.log(abcName.substr(-15));                        // ple,Banana,Kiwi





// Replace Method

let txtName:string = "Hello Google,Google is Fast !";
console.log(txtName.replace("Google","Microsoft"));     // Hello Microsoft,Google is Fast !





// Replace All Method

// let txtName1:string = "Hello Google,Google is Fast !";
// console.log(txtName1.replaceALL("Google","Microsoft"));

// Not Work To ReplaceAll USE





// toUpperCase Method

let text1:string = "Hello World!";
console.log(text1.toUpperCase());              // HELLO WORLD!





// toLowercase Method

let text2:string = "Hello World!";
console.log(text1.toLowerCase());        // hello world!





// Concat  Method

let text3:string = "Ankush";
let text4:string = "Thummar";
console.log(text3.concat(" ", text4));     // Hello World





//  Trim Method

let text5:string = "         Hello World!          ";
console.log(text5.trim());                               // Hello world!





// TrimStart Method

// let text6:string = "           Hello Ankush          ";
// console.log(text6.trimStart());                                // Not Work





// trimEnd Method

// let text7:string = "        Hello Ankush               ";
// console.log(text7.trimEnd());                                  // Not Work




// padStart Mehod

// let text8:string = "5";
// console.log(text8.padStart(4,"0"));                     // Not Work





// padEnd Mehod

// let text8:string = "5";
// console.log(text8.padEnd(4,"0"));                     // Not Work





// chartAt Method

let text9:string = "HELLO WORLD";
console.log(text9.charAt(0));                 // H




// chartCodeAt Method

let text10:string = "HELLO WORLD";
console.log(text10.charCodeAt(0));             // 72




// spilt Method

let text11 = "HELLO WORLD";
console.log(text11.split(","));                // Split on commas
console.log(text11.split(" "));                // Split on spaces
console.log(text11.split("|"));                // Split on pipe


