const prompt = require('prompt-sync')();

//Exercise 1

/*
var car = {
    make: "Nissan",
    model: "Pathfinder",
    year: 2011,
    color: "black",
    start: function() {
        return "The car has started";
    }
}

console.log(car.start());

*/

//Exercise 2

/*

let person = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 25,
    city: "Lancaster",
    greet: function() {
        return `Hi my name is ${this.name.firstName} ${this.name.lastName} and I am ${this.age} years old.`;
    }
}

console.log(person.name.firstName + " " + person.name.lastName);
console.log(person['name']['firstName'] + " " + person['name']['lastName']);

person.age = 30;
person.occupation = "Student";
console.log(person.greet());

*/

//Exercise 3

/*

var student = {
    name: {
        first: "Codey",
        last: "Erb"
    },
    age: 18,
    courses: {
        one: "CSET",
        two: "Public Speaking",
        three: "Small Business Management"
    },
    printInfo: function() {
        return `${this.name.first} ${this.name.last} \n1. ${this.courses.one} \n2. ${this.courses.two} \n3. ${this.courses.three}`;
    }
}

console.log(student.printInfo());

*/

//Exercise 4

/*

let computer = '{ "type": "laptop", "model": "Dell"}';

let object = JSON.parse(computer);
object.price = 1200;
computer = JSON.stringify(object);
console.log(computer);

*/

//Exercise 5

/*

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I\'m ${this.name} and I am ${this.age} years old.`)
    }
}

let p1 = new Person("Codey", 18);
let p2 = new Person("Orlando", 36);
p1.introduce();
p2.introduce();

*/

//Exercise 6

/*

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I\'m ${this.name} and I am ${this.age} years old.`)
    }

    birthday() {
        console.log(this.age + 1);
    }
}

let p1 = new Person("Codey", 18);
p1.birthday();

*/

//Exercise 7

/*

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }
    deposit(amount) {
        this.balance+= amount
        console.log(`You now have: $${this.balance}.`);
    }
    withdraw(amount) {
        this.balance-= amount
        console.log(`You now have: $${this.balance}.`);
    }
    displayBalance() {
        console.log(`You have: ${this.balance}`);
    }
}

let person = new BankAccount("Codey", 500);
person.withdraw(200);
person.deposit(300);
person.displayBalance();

*/

//Exercise 8

/*

class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

let dog = new Animal("Dog", "Woof");
let cat = new Animal("Cat", "Meow");
dog.makeSound();
cat.makeSound();

*/