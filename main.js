
/* Exercise 1:
--------------

Write a Javascript program to check two numbers and return true if one
of the number is 100 or if the sum of the two numbers is 100

*/


/*
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

/* Exercise 2:
--------------

Write a Javacsript program to get the extenstion of a filename.
*/

/*
const getFileExtension = (str) => 

str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.js'));
*/
/* Exercise 3:
--------------

Write a Javascript program to replace every character in a given string
with the character following it in the alphabet
*/

// String.fromCharCode
// charCodeAt
/*
const moveCharsForward = (str) => 
    str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');


console.log(moveCharsForward('abcd'));
*/
/*
function replaceChar(str) {

    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // string to array

    const array = str.split('');
    console.log(array);
    const newArray = [];
 
    // select each letter from string
    
    array.forEach(letter => {
        // console.log(letter);
       
        // replace each letter with a character following in the alphabet

        let position = alphabet.indexOf(letter);
        // console.log('current position ' + position);

        let newPosition = position + 1;
        // console.log( 'new position ' + newPosition);
        
        let newLetter = alphabet[newPosition];
       
        newArray.push(newLetter)
       console.log(newArray);
       
       
        // const newWord = newArray.push(newLetter);
       
        
    })
    
    newArray.join('');
    
    const arrayWord = newArray.join('');
    console.log(arrayWord);
/*
    for (var i = 0; i < array.length; i++) {

        // console.log(array[i])
        let position = alphabet.indexOf(array[i]);
         // console.log('current position ' + position);

         let newPosition = position + 1;
         // console.log( 'new position ' + newPosition);
         
         let newLetter = alphabet[newPosition];
         console.log(newLetter)
       
 
    }


}

console.log(replaceChar('hello'));
*/
/* Exercise 4:
--------------
Write a Javascript program to get the current date.
Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

*/
/*
function date() {

const date = new Date();
const day = date.getDate() + 1 ;
const month = date.getMonth() + 1;
const year = date.getFullYear();


return `${day}-${month}-${year}`;



}

console.log(date());

const formatDate = (date = new Date()) => {

    const days = date.getDate() + 1;
    const months = date.getMonth() + 1;
    const years = date.getFullYear();

    return `${days}/${months}/${years}`;
}

console.log(formatDate());
*/

/* Exercise 5:
----------

Write a javascript program to create a new string adding "New!" in front of a
given string. If the given string begins with "New!" already then return the original string

*/
/*
function addString(str) {

  
   if(str.indexOf('New!') === 0) {
       return str;
   } else {
       return 'New!' + ' ' + str;
   }
   
}

console.log(addString('New! offers'));
*/

/* Beginner Exercises: Part 2
----------------------------
*/

/*
Write a Javascript program to create a new string from a given string taking
the first 3 characters and the last 3 characters of a string and add them together. The string length must be 3 or more, if not, the original string is 
returned.
*/
/*
function combineString(str) {

 
    // take the first 3 char
    const word1 = str.substring(0,3);
   // console.log(word1);

    // take tha last 3 char

    const word2 = str.substring(str.length - 3, str.length );
    //console.log(word2)

    // combine them together

    const newWord = word1 + word2;
    // console.log(newWord);

    if(str.length >= 3) {
        return newWord;
    } else {
        return str;
    }


}

console.log(combineString('si'));
*/
/*
function combineString(str) {

    if(str.length < 3) {
        return str;
    } else {

        const word = str.slice(0,3) + str.slice(-3);
        return word;
    }
}

console.log(combineString('abc'));
console.log(combineString('abcdef'));
console.log(combineString('abc123abc123'));

console.log(combineString('ab'));
*/
/*
const makeNewString = (str) =>  str.length < 3 ? str : str.slice(0,3) + str.slice(-3);

console.log(makeNewString('abc'));
console.log(makeNewString('abcdef'));
console.log(makeNewString('abc123abc123'));

console.log(makeNewString('ab'));
*/

/*
Exercise 2:
-------------
Write a javascript program to extract the first half of a string of even length
*/
/*
function extraxtString(str) {

    if(str.length % 2 == 0 ) {
        const word = str.substring(0, str.length / 2);
        console.log(word);
    }

}

console.log(extraxtString('temp'));
console.log(extraxtString('temple'));
console.log(extraxtString('temples'));
*/
/*
const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf('temp'));
console.log(firstHalf('temple'));
console.log(firstHalf('temples'));
*/

/*
Exercise 3:
-------------
Write a Javascript program to concatenate two strings except their first character
*/
/*
function combineString(str1, str2) {

    const word1 = str1.slice(1, str1.length);
    console.log(word1);
    const word2 = str2.slice(1, str2.length);
    console.log(word2);

    const newWord = word1 + word2;
    return newWord;

}

console.log(combineString('hello', 'bonjour'));

const concatenate = (str1, str2) => 

    str1.slice(1) + str2.slice(1);


console.log(concatenate('abc', 'def'));
console.log(concatenate('Junior', 'Developer'));
*/

/*
Exercise 4:
----------
Given two values, write a Javascript program to find out which one is nearest to 100
*/
/*
function findNumber(a,b) {

    const num1 = 100 - a;
    const num2 = 100 - b;

    if(num1 < num2) {
        return a;
    } else {
        return b;
    }
}

console.log(findNumber(99,1));
console.log(findNumber(49,51));
console.log(findNumber(50,50));
*/
/*
const closestTo100 = (a,b) => 
    (100 - a) < (100 - b) ? a : b;


console.log(closestTo100(99,1));
console.log(closestTo100(49,51));
console.log(closestTo100(50,50));
*/

/*
Exercise 5:
-----------

Write a javascript program to check a given string contains 2 to 4 occurences of a specified character.
*/
/*
function checkString(char, string) {

    const array = string.split('');
    console.log(array);

    let counter = 0;
    for(var i = 0; i < array.length; i++) {

        if(array[i] === char) {
            counter++;
        }
    }

    if(counter >= 2 && counter <= 4) {
        return counter;
    } else {
        console.log('has reached the limit of 4')
    }
   
}

console.log(checkString('o', 'iojqdsfoqdosfo'));
*/
const countChars = (str, char) => 
    str.split('').filter(ch => ch === char).length;


const contains2To4 = (str, char) => 
    countChars(str, char) >= 2 && countChars(str, char) <= 4


console.log(contains2To4('ooh!', 'o'));
console.log(contains2To4('oh!', 'o'));
console.log(contains2To4('oooh!', 'o'));
console.log(contains2To4('ooooh!', 'o'));
console.log(contains2To4('oooooh!', 'o'));