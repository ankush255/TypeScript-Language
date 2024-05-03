// Enum Method




// 1

enum Gender{
        Male,
        female
    }
    
const checkGender = Gender.Male;
console.log("checkGender",checkGender);         // checkGender 0








// 2

enum Plan {
    CORNER = 23,
    MIDDEL = "MySheet",
    WINDOW = 2,
    FOURTH
}

const planSheet = Plan.MIDDEL;
console.log(Plan.CORNER);                        // 23
console.log(Plan.FOURTH);                        // 3
console.log(Plan.MIDDEL);                        // MySheet
console.log(Plan.WINDOW);                        // 2