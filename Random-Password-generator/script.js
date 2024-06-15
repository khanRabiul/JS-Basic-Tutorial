 
function passwordGenerate(length, includesLowerCase, includesUpperCase, inculdesNumbers, includesSymbols) {
    const lowerCase = 'abcdefghijklmnopqurstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '+-*/=+-_)(*&^%$#@!`~,./\|:;';

    let allowedChars = '';
    let password = '';

    allowedChars += includesLowerCase ? lowerCase: '';
    allowedChars += includesUpperCase ? upperCase: '';
    allowedChars += inculdesNumbers ? numbers: '';
    allowedChars += includesSymbols ? symbols: '';
    
    if(length <= 0) {
        return`Password charcter must be at least 1`
    }
    if(allowedChars.length === 0) {
        return `At least 1 set of character needs to be selected`;
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includesLowerCase = true;
const includesUpperCase = true;
const inculdesNumbers = true;
const includesSymbols = true;


const password = passwordGenerate(passwordLength, includesLowerCase, includesUpperCase, inculdesNumbers, includesSymbols);

console.log(`Your password is: ${password}`);