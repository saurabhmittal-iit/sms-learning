// caesarCipher using simple commands
const caesarCipher = (str, num) => {
    num = num % 26;
    let lowerCaseStr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newStr = '';
    for (let i = 0; i < lowerCaseStr.length; i++) {
        let currentLetter = lowerCaseStr[i];
        let currentIndex = alphabet.indexOf(currentLetter);
        if (currentIndex === -1) {
            newStr += currentLetter;
            continue;
        }
        let newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;
        if (str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();
        } else newStr += alphabet[newIndex];
    }
    return newStr;
}

console.log(caesarCipher('!', 2));



