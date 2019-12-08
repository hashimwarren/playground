const account = {
    name: 'Hashim Warren',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        const newExpense = {description, amount}
        return this.expenses.push(newExpense)
    },
    addIncome: function (description, amount) {
        const newIncome = {description, amount}
        return this.income.push(newIncome)
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount 

        })

        let totalIncome = 0
        this.income.forEach(function (money) {
            totalIncome = totalIncome + money.amount 
        })

        const accountBalance = totalIncome - totalExpenses
        return `${this.name} has an account balaance of $${accountBalance}, $${totalExpenses} in expenses and $${totalIncome} in income`
    }
}

// expenses - description, amount
// addExpense - description, amount
// getAccountSummary - total up all expenses - "Hashim has $1250 in expenses" (use forEach)



account.addExpense('Rent', 950)
account.expenses //?
account.getAccountSummary() //?

account.addExpense('Coffee', 2) 
account.expenses //?
account.getAccountSummary() //?

account.addIncome('Job', 1000)
account.getAccountSummary() //?