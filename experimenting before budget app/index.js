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

// let john = new Athlete6("john", 1990, "coach", 3, 10);

// john.calculateAge();
// -------------------------------------------------------

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
// console.log(triangle.calcPerimeter());

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
// console.log(square.calcArea());
// console.log(square.calcPerimeter());

// ------------------------------------------------------------

// function Person(first, last, age, gender, interests) {
//     this.name = {
//         first,
//         last
//     };
//    // this.name returns {first: "raman", last: "karki"};
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
// };

// Person.prototype.greeting = function () {
//     alert('Hi! I\'m ' + this.name.first + '.');
// };

// function Teacher(first, last, age, gender, interests, subject) {
//     Person.call(this, first, last, age, gender, interests);

//     this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.greeting = function () {
//     let prefix;

//     if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
//         prefix = 'Mr.';
//     } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
//         prefix = 'Ms.';
//     } else {
//         prefix = 'Mx.';
//     }

//     console.log('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
// };

// let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');

// console.log(teacher1.name.first);
// console.log(teacher1.interests[0]);
// console.log(teacher1.subject);
// teacher1.greeting();


// class Person {
//     constructor(first, last, age, gender, interests) {
//         this.name = {
//             first,
//             last
//         };
//         this.age = age;
//         this.gender = gender;
//         this.interests = interests;
//     }

//     greeting() {
//         console.log(`Hi! I'm ${this.name.first}`);
//     };

//     farewell() {
//         console.log(`${this.name.first} has left the building. Bye for now!`);
//     };
// }

// class Teacher extends Person {
//     constructor(first, last, age, gender, interests, subject, grade) {
//         super(first, last, age, gender, interests);

//         // subject and grade are specific to Teacher
//         this.subject = subject;
//         this.grade = grade;
//     }
// }

// let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
// snape.greeting(); // Hi! I'm Severus.
// snape.farewell(); // Severus has left the building. Bye for now.
// console.log(snape.age) // 58
// console.log(snape.subject); // Dark arts
// console.log(snape.name.last);

class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting() {
        console.log(`Hi! I'm ${this.name.first}`);
    };

    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`);
    };
}

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);
        // subject and grade are specific to Teacher
        this._subject = subject;
        this.grade = grade;
    }

    get subject() {
        return this._subject;
    }

    set subject(newSubject) {
        this._subject = newSubject;
    }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);

// Check the default value
console.log(snape.subject) // Returns "Dark arts"

// Change the value
snape.subject = "Balloon animals" // Sets _subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape.subject) // Returns "Balloon animals"


