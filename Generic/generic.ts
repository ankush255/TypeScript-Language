// Generic:- 

function indentity<Type>(arg:Type):Type{
    return arg
}



let output1 = indentity<string>("myDemo");
let output2 = indentity<number>(12323);



console.log(output1);                // myDemo
console.log(output2);                // 12321