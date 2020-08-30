//Multiple arguments

let add = function (a,b,c) {
    return  a + b + c;
}

let result = add(10,12,98);
console.log(result);

//Default Arguments -- if the arguments aren't called

let getScoreText = function(name = "Anonymous", score = "0"){ //Values are only used if arguments are not provided
    return 'Name: ' + name + ' - Score: ' + score;
}

let scoreText = getScoreText("Peter", 12);
console.log(scoreText);

let scoreText1 = getScoreText(undefined, 10); //If you don't want to provide the first argument.
console.log(scoreText1);

//Challenge Area

//Create a tip calculator using default value(s)

let tipCalculator = function(total,tip = .2){
    let percentTip = tip * 100;
    let tipAmount = total * tip;
    return `A ${percentTip}% on $${total} would be $${tipAmount}`;

};

//Show tip value

let tipForToday = tipCalculator(60,.25);
console.log(tipForToday);

