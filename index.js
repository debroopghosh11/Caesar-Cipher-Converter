const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const key = document.querySelector('#key');
const listLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
];

let newText = '';

btnEncrypt.addEventListener('click', () => {
    const textarea = document.querySelector('#text');
    const keyValue = Number(key.value);

    for (let letter of textarea.value) {
        const isUpperCase = letter === letter.toUpperCase();
        letter = letter.toLowerCase();
        
        if (!listLetters.includes(letter)) {
            newText += letter;
            continue;
        }

        const indexLetter = listLetters.findIndex((item) => item === letter);
        let indexNewletter = (indexLetter + keyValue) % 26;

        if (indexNewletter < 0) {
            indexNewletter += 26;
        }

        let newLetter = listLetters[indexNewletter];

        if (isUpperCase) {
            newLetter = newLetter.toUpperCase();
        }

        newText += newLetter;
    }

    textarea.value = newText;
    newText = '';
});

btnDecrypt.addEventListener('click', () => {
    const textarea = document.querySelector('#text');
    const keyValue = Number(key.value);

    for (let letter of textarea.value) {
        const isUpperCase = letter === letter.toUpperCase();
        letter = letter.toLowerCase();
        
        if (!listLetters.includes(letter)) {
            newText += letter; 
            continue;
        }

        const indexLetter = listLetters.findIndex((item) => item === letter);
        let indexNewletter = (indexLetter - keyValue) % 26;

        if (indexNewletter < 0) {
            indexNewletter += 26;
        }

        let newLetter = listLetters[indexNewletter];

        if (isUpperCase) {
            newLetter = newLetter.toUpperCase();
        }

        newText += newLetter;
    }

    textarea.value = newText;
    newText = '';
});
