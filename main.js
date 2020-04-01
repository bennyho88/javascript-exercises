
/* Exercise 1:
--------------

Write a Javascript program to check two numbers and return true if one
of the number is 100 or if the sum of the two numbers is 100

*/



function checkNumbers(a, b) {

    if(a === 100 || b === 100) {
       return true;
    } else if ((a + b) === 100) {
       return true;
    }

    return false
}

console.log(checkNumbers(100, 50));
console.log(checkNumbers(50, 100));
console.log(checkNumbers(48, 78));
console.log(checkNumbers(80, 20));
console.log(checkNumbers(50, 50));

/* ES6 solution */

/*
const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a+b) === 100

console.log(isEqualTo100(100,50))

console.log(isEqualTo100(50,100))

console.log(isEqualTo100(80,20))

console.log(isEqualTo100(28,68))
*/