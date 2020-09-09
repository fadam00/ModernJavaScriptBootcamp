let num = 103.941

//To fixed method allows us to pick how many decimal points it'll have

console.log (num.toFixed(2)); // 103.94

//To round a number to the highest number is >5 or to the lowest number if <5

console.log(Math.round(num));

//Rounds down

console.log(Math.floor(num));

//Rounds up

console.log(Math.ceil(num));

//Generate a random number between 0 and 1

let min = 10;
let max = 20;
let randomNum = Math.random(); // gives you a num between 0 and .999999
let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min // Allows for a random number between min and max
console.log(randomNum2);

//Challenge Area

//Guessing Game! Guess the right number: win!

let guessTheNum = function (userInput) {
    let min = 0;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    if(randomNum === userInput){
        console.log(`You guess ${userInput} and the right number is ${randomNum}, so you won!`);
    } else {
        console.log(`Try again, big guy.`);
    }


}

guessTheNum(3);

