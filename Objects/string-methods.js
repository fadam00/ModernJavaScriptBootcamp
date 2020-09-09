let name = 'Frank Adames';

//Length Property

console.log(name.length);

// Convert to Uppercase Method

console.log(name.toUpperCase());

//Convert to lower case

console.log(name.toLowerCase());

//Includes method
let password = 'abc123asdf098';
console.log(password.includes('password'));

// Trim
console.log(name.trim());

//Challenge Area

//isValidPassword

let isValidPassword = function (password) {
    if(password.length <= 8 || password.includes('password')){
        return false;
    } else {
        return true;
    }
}

console.log(isValidPassword('asdfp')); // FALSE
console.log(isValidPassword('abc123!#@$!$%!')); // TRUE
console.log(isValidPassword('asdfpasdfaadfpassword')); // FALSE