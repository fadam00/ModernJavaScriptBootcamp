 const notes = ['Note 1', 'Note 2', 'Note 3'];

// console.log(notes);

// //Length Property - know how many items are in an array

// console.log(notes.length);

// //Grab individual item from the array
// console.log(notes[1]);

// //Grab the LAST item from an array
// console.log(notes[notes.length - 1]);

// //Challenge Area

// //Create an array with five todos

// const todos = ['Walk the car', 'Fly the dog to the doctor', 'Flush the toile'];

// //You have x todos

// console.log(`You have ${todos.length} todos.`)

// //Print the first and second to last item in the array --> Todo: to do task

// console.log(`Your first todo item is ${todos[0]} and your second to last todo item is ${todos[todos.length - 2]}.`)

// //Add elements to the last index of an array

// notes.push('More notes!');

// //Removes last item from the an of an array

// notes.pop();

// //Removes first item in the array

// notes.shift()

// //Add first item to the array

// notes.unshift('My first note');

//Add elements to the middle of an array and removes items from wherever in the array

notes.splice(1, 1, 'This is my second item') // First arg tells you where to start, the second arg tells you how many items to delete from that index if 0 then deletes nothing, third arg is what to add

console.log(notes);


//Challenge Area 2

//Create an array with five todos

const todos = ['Walk the car', 'Fly the dog to the doctor', 'Flush the toilet', 'Be yourself', 'Be cool'];

//You have x todos

// console.log(`You have ${todos.length} todos.`)

// //Print the first and second to last item in the array --> Todo: to do task

// console.log(`Your first todo item is ${todos[0]} and your second to last todo item is ${todos[todos.length - 2]}.`)

//Delete the 3rd item

console.log(`You've removed ${todos.splice(2,1)}.`);

//Add a new item onto the end

console.log(`You've added ${todos.push('This is my new task')}.`);

//Remove the first item from the list

console.log(`You've removed ${todos.shift()}.`);

console.log(`You have ${todos.length} todos.`)
console.log(todos);

