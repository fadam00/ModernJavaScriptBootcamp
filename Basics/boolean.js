let temp = 32;
let isFreezing = temp <= 32

console.log(isFreezing);



// Challenge Area

//Create age set to your age
//Calculate is child - if they are 7 or under
//Calculate is senior - if they are 65 or older
//Print is child value
//Print is senior value

let age = 6;
let isChild = age <= 7;
let isSenior = age >= 65;

console.log(isChild);
console.log(isSenior);

//If 7 or under print about child pricing

if (isChild == true){
    console.log("We have children pricing!")
}


//If 65 or older print message about senior discount

if(isSenior == true){
    console.log("We have senior discounts!")
}
