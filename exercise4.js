//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) //return 13
// Closure, the function runs, executes, and never executes again, BUT it's going to remember that there are references to those variables so the child scope alwas has access to the parent scope.

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // 30

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) // 17
// Currying || The proccess of converting a function that takes multiple arguments into a function that takes them 1 at a time

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) //16
//COMPOSE - The act of putting two functions together to form a 3rd function where the output of one function is the input of the other. 

//What are the two elements of a pure function?

// DETERMINISTIC -  No matter what if my input, ex:(5, 10), goes through a function the return value will always be the same (5, 10)

// Avoiding Side Effects -  In order for us to write good code, we avoid side effects, and always make sure we are returning. 


//Advanced Arrays

const array = [1, 2, 10, 16];

const double = []

const newArr = array.forEach((num) => {
  double.push(num * 2);
})

console.log(double);

// map -always needs to return something: anytime you think about doing a loop
const mapArray = array.map((num) => {
  return num * 2;
})
console.log(mapArray);
// filter

// reduce