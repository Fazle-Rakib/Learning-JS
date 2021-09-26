const personalAcc = {
    firstName:'Abul',
    lastName:'Hasan',
    incomes: 10000,
    expenses: 5000,
    totalIncome: function(addIncome = 0){
        this.incomes += addIncome;
        return this.incomes;
    },
    totalExpense: function(addExpense = 0){
        this.expenses += addExpense;
        return this.expenses;
    },
    accountBalance: function(){
        return this.incomes-this.expenses;
    }
}
personalAcc.totalExpense(2000);
const personalAccJson = JSON.stringify(personalAcc,undefined,4);
localStorage.setItem('Account Info',personalAccJson);
console.log(localStorage.getItem('Account Info'));