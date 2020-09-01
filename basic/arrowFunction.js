const a = 10
const arrow = (a) => a * 2;
console.log(arrow(a));

// --------------------------------------------------------------------------------------------

const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting());

// --------------------------------------------------------------------------------------------

function functionName(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
functionName("hello", "hi", "bye");

// --------------------------------------------------------------------------------------------

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0); // this 0 is used as a second value to return 0 when no arguments are given in sum function.
}
console.log(sum());

