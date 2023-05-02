// What are loops?
// What are "for loops"?
// How to write for loops?
// EXAMPLES of usages


// Life without loops
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log(11);
console.log(13);
console.log(13);
console.log(14);
console.log(15);

console.log("================================")

// Initializer or Starter or starting point
// Condition for when your loop should end
// Incrementor or decrementor|| continues up or down


// i = i + 1; // i = 0 + 1 // i = 1
// i = i + 1; // i = 1 + 1 // i = 1
// i = i + 1; // i = 2 + 1 // i = 1
// i = i + 1; // i = 3 + 1 // i = 1
// i = i + 1; // i = 4 + 1 // i = 1


// for (var bunny=0; bunny<30; bunny++) {
//     console.log("clap!");
// }


// var total = 0;

// for (var num = 1; num <= 100; num++) {
//     total = total + num;
// }

// console.log("The total is: " + total);

// var fruits = ["mango", "banana", "apple", "cherry", "asd", "cucumber"];


// for (var i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }

var data = {
    name: "john",
    age: 28,
    maritalStatus: true
}
console.log(data["maritalStatus"])


for (var elem in data) {
    console.log(elem, data[elem]);
}



