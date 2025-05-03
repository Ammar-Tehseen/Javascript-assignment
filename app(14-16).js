// 1. Declare an empty array using JS literal notation to store 
// student names in future. 

var student1=[""]

// 2. Declare an empty array using JS object notation to store 
// student names in future. 

let students2 = new Array();

//3. Declare and initialize a strings array.
let strings = ["hello", "world"];

// 4.  Declare and initialize a numbers array.
let numbers = [1, 2, 3];

// 5.  Declare and initialize a boolean array.
let booleans = [true, false, true];

// 6. Declare and initialize a mixed array. 
let mixed = [1, "two", false]

// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like: 

let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

function displayQualifications() {
    console.log("Qualifications:");
    qualifications.forEach((qual, index) => {
        console.log(`${index + 1}) ${qual}`);
    });
}
displayQualifications()

// 8. Write a program to store 3 student names in an array.Take 
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

let students = ["Michael", "John", "Tony"];
let scores = [320, 230, 480];

function displayScores() {
    students.forEach((student, index) => {
        const percentage = (scores[index] / 500) * 100;
        console.log(`Score of ${student} is ${scores[index]}. Percentage: ${percentage}%`);
    });
}
console.log(displayScores());

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

let studentScores = [320, 230, 480, 120];
studentScores.sort((a, b) => a - b);
console.log("Ordered Scores of Students:", studentScores.join(","));

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array. 

let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(2, 4);
console.log("Selected cities list:", selectedCities.join(","));

// 12.  Write a program to create a single string from the 
// below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method)

let arr = ["This", "is", "my", "cat"];
let str = arr.join(" ");
console.log("String:", str);

// 13. Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

let devicesQueue = [];
devicesQueue.push("keyboard");
devicesQueue.push("mouse");
devicesQueue.push("printer");
devicesQueue.push("monitor");

while (devicesQueue.length > 0) {
    console.log("Out:", devicesQueue.shift());
}

// 14. Create a new array. Store values one by one in such a way 
// that you can access the values in reverse order. (Last In
// First Out) 

let devicesStack = [];
devicesStack.push("keyboard");
devicesStack.push("mouse");
devicesStack.push("printer");
devicesStack.push("monitor");

while (devicesStack.length > 0) {
    console.log("Out:", devicesStack.pop());
}


