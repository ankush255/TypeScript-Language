// CLASS 
var Person1 = /** @class */ (function () {
    function Person1(name, ageNumber, hobbies) {
        this.name = name;
        this.age = ageNumber;
        this.hobbies = hobbies;
    }
    return Person1;
}());
// Intence 
var PersonOne = new Person1("nirbhay", 23, ["Chess", "criket"]);
var PersonAmi = new Person1("Ami", 20, ["Slepping", "bolling"]);
var PersonAnkush = new Person1("Ankush", 17, ["criket", "ridding"]);
console.log(PersonOne);
// age: 23
// hobbies: (2) ['Chess', 'criket']
// name : "nirbhay"
console.log(PersonAmi);
// age: 20
// hobbies: (2) ['Slepping', 'bolling']
// name: "Ami"
console.log(PersonAnkush);
// age :  17
// hobbies :  (2) ['criket', 'ridding']
// name :  "Ankush"
console.log(PersonOne.name); // nirbhay
console.log(PersonOne.age); // 23
console.log(PersonOne.hobbies); // 0 : "Chess"    ,      1 : "criket"
