
//This function takes a string and removes everything in it except for the letters.

const lettersOnly = (string) => {
    var stringArray = string.split('');
    var lettersArray = stringArray.filter(letter => letter == letter.match(/^[A-Za-z]+$/));
    return lettersArray.join('');
}

//---Sample outputs---
console.log(lettersOnly("B4rry"));
console.log(lettersOnly("101 Dalmations"));