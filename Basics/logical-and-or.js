// Challenge Area

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

//If both are vegan offer up vegan dishes.
//If at least one vegan, make sure to offer up some vegan options.
//Else, offer up anything on the menu

if (isGuestOneVegan == true && isGuestTwoVegan == true){
    console.log("Oh we have plenty of vegan options!")
} else if ((isGuestOneVegan == false && isGuestTwoVegan == true) || (isGuestOneVegan == true && isGuestTwoVegan == false)){
    console.log("Oh we have some vegan options!")
} else if (isGuestOneVegan == false && isGuestTwoVegan == false){
    console.log("Oh we have no vegan options!")
    
}