//Global scope (convertFtoC, fToC1, fToC2)
 //Local scope (temp (the argument), celsius)
    // Local scope (isFreezing)

let convertFtoC = function (temp) {
    let celsius = (temp - 32) / 1.8;
    return celsius;

    if (celsius <= 0) {
        let isFreezing = true;
    }
}

//Call a couple of times (32 -> 0) (68 -> 20)

let fToC1 = convertFtoC(70);
let fToC2 = convertFtoC(32);


//Print the converted values

console.log(fToC1);