
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

const moveCharsForward = (str) => 
    str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');


console.log(moveCharsForward('abcd'));
    /*
function replaceChar(str) {

    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // string to array

    const array = str.split('');
    console.log(array);

    
    // select each letter from string
    
    array.forEach(letter => {
        // console.log(letter);

        // replace each letter with a character following in the alphabet

        let position = alphabet.indexOf(letter);
        // console.log('current position ' + position);

        let newPosition = position + 1;
        // console.log( 'new position ' + newPosition);
        
        let newLetter = alphabet[newPosition];
       
        console.log(typeof newLetter);

        
        const newWord = newLetter.toString();
        console.log(newWord);
        
    })
    

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