let myAccount = {
    name: 'Frank Adames',
    expenses: 0,
    income: 0
}

let addExpense = function (userAccount, amount) {  
    userAccount.expenses = userAccount.expenses + amount;
}

//Challenge - Complete the Expense Tracker

// addIncome Function

let addIncome = function (userAccount, amount) {
    userAccount.income = userAccount.income + amount;
}

// resetAccount - Set income and expenses to 0

let resetAccount = function (userAccount) {
    userAccount.income = 0;
    userAccount.expenses = 0;
}

// getAccountSummary

let getAccountSummary = function (userAccount) {
    return `Account for ${userAccount.name} has $${userAccount.income - userAccount.expenses}. $${userAccount.income} in income. $${userAccount.expenses} in expenses.`
}
// Account for Andrew has $900. $1000 in income. $100 in expenses.

addIncome(myAccount, 300);
addExpense(myAccount, 100);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

