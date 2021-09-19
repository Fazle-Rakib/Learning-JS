// Defining a class and instantiation; 
// default values; 
// this keyword;
// Creating multiple obj of same class
class Person{
    constructor(firstName = 'User', lastName = 'X')
    {
        console.log(this);
        this.firstName = firstName;
        this.lastName = lastName;
        console.log(this);
    }

}
const person = new Person('Abul' ,'Gazi');
const defaultPerson = new Person();
// console.log(person, typeof person);

//Class Methods & Properties with initial values & getter & setter
class PersonWtihDetails{
    constructor(firstName,lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.skills = [];
        // this.department = null;
    }
    getFullName()
    {
        return this.firstName+ " " +this.lastName;
    }

    get getSkills()
    {
        return this.skills;
    }
    get getDepartment()
    {
        return this.department;
    }

    set setSkills(skill)
    {
        this.skills.push(skill);
    }
    set setDepartment(department)
    {
        this.department = department;
    }
    
}

const person2 = new PersonWtihDetails('Elon','Mask');
console.log('Full Name : ',person2.getFullName());
console.log('Skills: ',person2.skills);

//Do not use parenthesis to call get method & set method
console.log('Skills Using get method: ',person2.getSkills); 

person2.setDepartment = 'Engineering';
console.log('Department: ',person2.getDepartment);

person2.setSkills = 'Communication';
person2.setSkills = 'Programming';
console.log(person2.getSkills);

// Static method
class ShowTime{
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
          hours = '0' + hours
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
    
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        // console.log(now.getMilliseconds());
        return fullTime
      }
}

const time = new ShowTime();
// console.log(time.showDateTime());

/*The previous line gives error as we are trying 
to access a static method through obj; 
rather it should be called directly from the class
*/
console.log(ShowTime.showDateTime());

// Inheritance
class Student extends PersonWtihDetails{
    constructor(firstName, lastName, title, address)
    {
        super(firstName,lastName);
        this.title = title;
        this.address = address;
    }
    getFullName()
    {
        return this.title + ' ' + this.firstName + ' ' + this.lastName;
    }
    get getAddress()
    {
        return this.address;
    }
}
const std1 = new Student('Aziz' , 'Kalam', 'Mr.', '221B, Baker Street');
console.log(std1.getFullName());
console.log(std1.getAddress);
console.log(std1.getSkills);