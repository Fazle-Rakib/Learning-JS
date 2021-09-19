//Case 1
class Animal{
    constructor(name,age,color,legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    get getName(){
        return this.name;
    }
    get getAge(){
        return this.age;
    }
    get getColor(){
        return this.color;
    }
    get getLegs(){
        return this.legs;
    }
    soundsLike(){

    }
}

//Case 2 && Ex 2
class Dog extends Animal{
    soundsLike(){
        return 'Buff Buff!';
    }
}

class Cat extends Animal{
    soundsLike(){
        return 'Mhew Mhew!';
    }
}

const dg1 = new Dog('Jad',2,'Black-White',4);
const cat1 = new Cat('Dan',1,'White',4);
console.log(dg1.getName,dg1.getColor,dg1.soundsLike());
console.log(cat1.getName,cat1.getColor,cat1.soundsLike());