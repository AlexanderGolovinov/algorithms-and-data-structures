/* Palindrome */

let letters = []; //our stack

let word = "racecar"; //is palindrome word
let word2 = "Alexander"; //is not palindrome word
let rword = ""; //reversed word

for(let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

for(let i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (word === rword) {
    console.log(rword + " is palindrome");
} else {
    console.log(rword + " is not palindrome");
}


