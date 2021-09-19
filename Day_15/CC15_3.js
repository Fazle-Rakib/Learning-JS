class Statistics{
    constructor(array)
    {
        this.array = array;
    }
    count(){
        return this.array.length;
    }
    sum(){
        let total = 0;
        this.array.forEach(element => {
            total+=element;
        });
        return total;
    }
    sortArray(){
        return this.array.sort();
    }
    min(){
        return this.sortArray()[0];
    }
    max(){
        return this.sortArray()[this.count()-1];
    }
    range(){
        return this.max() - this.min();
    }
    mean(){
        return this.sum()/this.count();
    }
    median(){
        if(this.count()%2 == 0)
        {
            return [
                this.sortArray()[Math.ceil(this.count()/2)-2],
                this.sortArray()[Math.ceil(this.count()/2)-1],
            ];
        }
        else
        {
            return this.array[Math.ceil(this.count()/2)-1];
        }
    }
    freCounter(){
        const rangeCalculated = this.range();
        const minValue = this.min();
        const counter = new Array(rangeCalculated+1);
        counter.fill(0);
        this.array.forEach((element)=>{
            counter[element-minValue]++;
        });
        return counter;
    }
    mode(){
        const counter = this.freCounter(),
        minValue = this.min();
        let maxIndex = 0;
        counter.forEach((element,index) =>{
            if(element > counter[maxIndex])
            {
                maxIndex = index;
            }
        });
        return {Mode : maxIndex+minValue, Occurance :counter[maxIndex]};
    }
    variance(){
        let sqrDiff = 0;
        const meanVal = this.mean();
        this.array.forEach(e =>{
            sqrDiff += (e-meanVal)**2;
        });
        return sqrDiff/this.count();
    }
    std(){
        return Math.sqrt(this.variance());
    }
    freqDist(){
        const counter = this.freCounter(),
        minValue = this.min(),
        total = this.count();
        const array = [];
        counter.forEach((ele,i) =>{
            array.push([minValue+i,(ele/total)*100]);
        })
        return array;
    }

}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = new Statistics(ages);
console.log(statistics.max(),statistics.min(),statistics.median());
console.log(statistics.mode());
console.log(statistics.variance());
console.log(statistics.std());
console.log(statistics.freqDist());

class PersonAccount{
    constructor(firstname, lastname, incomes, expenses){
        this.firstname = firstname;
        this.lastname =  lastname;
        this.incomes =  incomes;
        this.expenses =  expenses;
    }
    totalIncome(){
        return this.incomes;
    } 
    totalExpense(){
        return this.expenses;
    } 
    accountInfo(){
        return `Account holder : ${this.firstname} ${this.lastname} has balance of ${this.accountBalance()}`;
    }
    addIncome(credit){
        this.incomes+=credit;
    }
    addExpense(debit){
        this.expenses+=debit;
    }
    accountBalance(){
        return this.incomes-this.expenses;
    }
}

const person  = new PersonAccount('Sheikh', 'Fazal' , 100000, 27000);
console.log(person.accountInfo());