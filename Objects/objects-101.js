let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook);

//To get individual pieces of information from the object, use dot notation

console.log(myBook.title);
console.log(myBook.pageCount);

console.log(`My book is ${myBook.title} by ${myBook.author}`);

//To edit a property or set a property

myBook.title = 'Animal Farm';

console.log(`My book is ${myBook.title} by ${myBook.author}`);

//Challenge Area
//Create human object with name, age, location properties

let hooman = {
    name: 'Frank Adames',
    age: 28,
    location: 'Alexandria, VA'
}

//Print sentence using the properties.

console.log(`${hooman.name} is ${hooman.age} and lives in ${hooman.location}.`)

//Increase age by 1 and print message again.

hooman.age = hooman.age + 1;

console.log(`${hooman.name} is ${hooman.age} and lives in ${hooman.location}.`)
