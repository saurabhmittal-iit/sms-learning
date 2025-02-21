const caesarCipher3 = (x) => {
    return x.replace(/[a-z]/gi, (c) => {
        return String.fromCharCode(((c.charCodeAt(0) - 97 + 3) % 26) + 97);
    });
};
console.log(caesarCipher3("Hello Bab!"));

