// Function - input(argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!');
}

greetUser();

//With Arguments

let square = function (num) {

    let result = num * num;
    return result;


}

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);


//Challenge Area

//convertFahrenheitToCelsius

let convertFtoC = function (temp) {
    let celsius = (temp - 32) / 1.8;
    return celsius;
}

//Call a couple of times (32 -> 0) (68 -> 20)

let fToC1 = convertFtoC(70);
let fToC2 = convertFtoC(32);


//Print the converted values

console.log(fToC1);
console.log(fToC2);