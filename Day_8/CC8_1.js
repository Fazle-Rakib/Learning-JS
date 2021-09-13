// Case 1
const dog = {};

// Case 2
console.log(dog);

// Case 3
dog.name = 'Judo';
dog.legs = 4;
dog.color = 'black & white';
dog.bark = function(){
    return 'woof woof';
}
// Case 4
console.log(dog.name,dog.legs,dog.color,dog.bark());

// Case 5
dog.breed = 'Shepard';
dog.getDogInfo = function(){
    return `${this.name} is a ${this.breed} dog which has ${this.color} strips in his body. His barks like ${this.bark()}.`;
};

console.log(dog.getDogInfo());