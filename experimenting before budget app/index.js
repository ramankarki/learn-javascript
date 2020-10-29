class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedals() {
        this.medals++;
        console.log(this.medals);
    }
}

let john = new Athlete6("john", 1990, "coach", 3, 10);

// john.calculateAge();

// function Shape(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
// }

// Write your code below here
// Shape.prototype = {
//     calcPerimeter: function () {
//         return this.sides * this.sideLength;
//     },
// }

// let square = new Shape("square", 4, 5);
// console.log(square.calcPerimeter());

// --------------------------------------------------

class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    };

    calcPerimeter() {
        return this.sides * this.sideLength;
    };
}

let triangle = new Shape("triangle", 3, 3);
console.log(triangle.calcPerimeter());

class Square extends Shape {
    constructor(sideLength, name = "square", sides = 4) {
        super(name, sides, sideLength);
        this.sideLength = sideLength;
    }

    calcArea() {
        return this.sideLength ** 2;
    }
}

let square = new Square(5);
console.log(square.calcArea());
console.log(square.calcPerimeter());

