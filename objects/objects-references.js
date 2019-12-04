let myAccount = {
    name: 'Hashim Warren',
    expenses: 0,
    income: 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `${account.name} has $${balance}, $${account.income} in income, $${account.expenses} in expenses`
    
}
let addExpense = function (account, amount) {
    return account.expenses = account.expenses + amount
 
}

addExpense(myAccount, 500)

getAccountSummary(myAccount) //?

// addIncome

let addIncome = function (account, income) {
    return account.income = income + account.income

}



addIncome(myAccount, 501) 
getAccountSummary(myAccount) //?



// resetAccount

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
    
}

resetAccount(myAccount)
getAccountSummary(myAccount) //?

// getAccountSummary


// Account for Hashim has 900, 1000 in income, 100 in expenses (as return value)


// add income
// addExpense
// addExpense
// getAccountSummary
// resetAccount
// getAccountSummary

