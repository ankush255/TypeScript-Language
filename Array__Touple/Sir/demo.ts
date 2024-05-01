// Array 

let myArray:number[] = [1,2,3,5];
let yourArray:Array<string> = ["one", "Two"];

console.log(myArray);             // [ 1 , 2 , 3 , 4 ]
console.log(yourArray);           // [ "one" , "Two" ]






// Touple;

let array:[string , number , boolean];
array = ["One", 23, false];

console.log({message:array[0]});       // message : "One"
console.log(array[1]);                 // 23
console.log(array);                    // [ "One" , 23 , false ]







// Any 

let Hello:any;

function getHero(){
    return '2345';
}

Hello = getHero();
console.log(Hello);                 // 2345