let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {

    console.log(`${book.title} is a book by ${book.author} and has ${book.pageCount} pages.`);
}

getSummary(otherBook);
getSummary(myBook);

//Return an object inside of a function

let getSummary2 = function(book) {
    return {
        summary: `${book.title} is a book by ${book.author} and has ${book.pageCount} pages.`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long...Again.`
    }
}

let myBookSummary = getSummary2(myBook);
let otherBookSummary = getSummary2(otherBook);

console.log(myBookSummary);

//Challenge Area

//Convert Fahrenheit into Celsius AND Kelvin and returns an object with all 3 temperatures

let getTemp = function (ftemp) {

    ctemp =  (ftemp - 32) / 1.8;
    ktemp = (ftemp + 459.67) * (5/9);

    return {
        tempInF:`Fahrenheit: ${ftemp}.`,
        tempInC: `Celsius: ${ctemp}.`,
        tempInK: `Kelvin: ${ktemp}`
    }
}

let tempInF = getTemp(70);

console.log(tempInF);


