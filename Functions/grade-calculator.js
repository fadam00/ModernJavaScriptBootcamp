//Grade Calculator Function

//Will take in the Student Score and the Total Possible Score to generate the Letter Grade as well as the Percentage the student got.
//Letter Grade Scale: A (90-100), B (80-89), C (70-79), D (60-69), F <= 59
//For example takes in 15 as Student Score and 20 as total possible score and return "You got a C (75%)!"

let gradeCalculator = function(sScore, pScore = 100){

    let getTotalScore = (sScore / pScore) * 100;
    let resultString;

    if (getTotalScore >= 90){
        resultString = `You got an A (${getTotalScore}%)!`;

    } else if (getTotalScore <= 89 && getTotalScore >= 80){
        resultString = `You got an B (${getTotalScore}%)!`;

    } else if (getTotalScore >= 70 && getTotalScore <= 79){
        resultString = `You got an C (${getTotalScore}%)!`;

    } else if (getTotalScore >= 60 && getTotalScore <= 69){
        resultString = `You got an D (${getTotalScore}%)!`;
    } else if (getTotalScore <= 59){
        resultString = `You got an F (${getTotalScore}%)!`;
    } 

    return resultString;
}

let score = gradeCalculator(18,20);

console.log(score);