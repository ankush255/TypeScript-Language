// Enum Method
// 1
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var checkGender = Gender.Male;
console.log("checkGender", checkGender); // 
// 2
var Plan;
(function (Plan) {
    Plan[Plan["CORNER"] = 23] = "CORNER";
    Plan["MIDDEL"] = "MySheet";
    Plan[Plan["WINDOW"] = 2] = "WINDOW";
    Plan[Plan["FOURTH"] = 3] = "FOURTH";
})(Plan || (Plan = {}));
var planSheet = Plan.MIDDEL;
console.log(Plan.CORNER); // 
console.log(Plan.FOURTH); // 
console.log(Plan.MIDDEL); // 
console.log(Plan.WINDOW); // 
