// 1.Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

// function checkCharType(char) {
//     const code = char.charCodeAt(0);
//     if (code >= 48 && code <= 57) {
//         return "Number";
//     } else if (code >= 65 && code <= 90) {
//         return "Uppercase letter";
//     } else if (code >= 97 && code <= 122) {
//         return "Lowercase letter";
//     } else {
//         return "Other character";
//     }
// }
// console.log(checkCharType(2));


// 2. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.

function compareIntegers(a, b) {
    if (a > b) {
        return `${a} is larger than ${b}`;
    } else if (b > a) {
        return `${b} is larger than ${a}`;
    } else if (a === b) {
        return `${a} is equals to ${b}`
    }
     else {
        return "Both integers are equal";
    }
}
console.log(compareIntegers(5, 5));

// 3.Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

function checkNumberSign(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checkNumberSign(prompt("Enter a number")));

// 4. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise 

function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}
console.log(isVowel("a"));

// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. 
// Check if user has entered password. If not, then 
// give message “ Please enter your password” 
// ii. 
// Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise. 

const correctPassword = "admin123";

function validatePassword(inputPassword) {
    if (!inputPassword) {
        return "Please enter your password";
    } else if (inputPassword === correctPassword) {
        return "Correct! The password you entered matches the original password";
    } else {
        return "Incorrect password";
    }
}
console.log(validatePassword(prompt("Enter password")));

// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// } 

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
    console.log(greeting);
} else {
    greeting = "Good evening";
    console.log(greeting);
}

// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

function getGreeting(time) {
    if (time >= 0 && time < 1200) {
        return "Good morning!";
    } else if (time >= 1200 && time < 1700) {
        return "Good afternoon!";
    } else if (time >= 1700 && time < 2100) {
        return "Good evening!";
    } else if (time >= 2100 && time <= 2359) {
        return "Good night!";
    } else {
        return "Invalid time";
    }
}
console.log(getGreeting(prompt("enter the time (e.g 1900)")));
