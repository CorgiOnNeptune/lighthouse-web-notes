# Dictionary of Development Vocab

## Table of Contents

- [Algorithms](/Week_4/algorithms.md)
  - [Binary Search](/Week_4/algorithms.md#binary-search)
  - [Big O Notaion](/Week_4/algorithms.md#big-o-notation)
    - [Arbitrarily Large Inputs](/Week_4/algorithms.md#arbitrarily-large-inputs)
    - [Non-Dominant Terms](/Week_4/algorithms.md#non-dominant-terms)
    - [Drop Constant Terms](/Week_4/algorithms.md#drop-constant-terms)
  - [("O n") complexity](/Week_4/algorithms.md#o-n-complexity)
- [Callback Functions](#callback-functions)
- [Closures](#closures)
- [Falsy Values](#falsy-values)
- [Front-End](/Week_4/frontEnd.md)
  - [CSS Display](/Week_4/cssDisplay.md)
  - [DOM](/Week_4/frontEnd.md#dom-document-object-model)
  - [Event Propogation](/Week_4/frontEnd.md#event-propogation)
- [Lexical Scoping](#lexical-scoping)
- [**Mocha & Chai**](/Week_2/mocha_and_chai.md#mocha--chai)
- [**Networking**](/Week_2/networking.md#networking)
  - [API](/Week_2/networking.md#api)
  - [DNS](/Week_2/networking.md#dns-domain-name-system)
  - [HTTP](/Week_2/networking.md#http)
  - [TCP](/Week_2/networking.md#tcp---transition-control-protocol)
  - [REST](/Week_3/REST.md)
  - [URL](/Week_2/networking.md#url-uniform-resource-locator)
- [**Node: Readline**](/Week_2/node_readline.md#node-readline)
- [Primitive Data Types](#primitive-data-types)
- [Promise](#promises)
- [Recursive](#recursive)
  - [Recursive Case](#recursive-case)
  - [Base Case](#base-case)
- [Single Responsibility Principle](#single-responsibility-principle)
- [Stack](#stack)
  - [Full-Stack](#full-stack)
  - [Stack Overflow](#stack-overflow)
- [Testing](#testing)
  - [Functional Testing](#functional-testing)
  - [Integration Testing](#integration-testing)
  - [Unit Testing](#unit-testing)

&nbsp;

---

&nbsp;

## Callback Functions

A function that we pass (as an argument) to another function, to be invoked/called by that function.

```js
// The second argument/parameter is a (callback) function!
const findWaldo = (names, callback) => {
  // With .forEach()
  names.forEach((name, index) => {
    if (name === 'Waldo') {
      callback(name, index);
    }
  });
};
const actionWhenFound = (name, index) =>
  console.log(`Found ${name} at index ${index}!`);

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound);
```

### **Higher Order Function (HOF)**

A function that accepts another function as an argument.

i.e. `findWaldo()` is the HOF above.

&nbsp;
OR a function that returns a function.

&nbsp;

## Closures

Javascript retains context of parent functions, meaning that it will retain references to any variable inside parent functions. (aka [`Lexical Scoping`](#lexical-scoping)).

When a function retains the context of a parent function, we call it a `'closure'`.

```js
const useNumber = () => {
  // Outer (parent) Function
  let number = 5;

  const showNumber = () => {
    // Inner function
    console.log('Number is:', number);
    number++;
  };

  return showNumber;
};

const show = useNumber();

console.log(show); // ==> [Function: showNumber]
show(); // ==> 'Number is:' 5
show(); // ==> 'Number is:' 6
show(); // ==> 'Number is:' 7
show(); // ==> 'Number is:' 8
```

&nbsp;

## Falsy Values

The following `Javascript` values are always considered `false` in a `Boolean` context.

- `false`
- `undefined`
- `null`
- `0`
- `''`
- `NaN`

Every other value in `Javascript` is considered `true` or `truthy`.

&nbsp;

## Lexical Scoping

Every inner level of scope, can access its outer levels of scope.

&nbsp;

## Primitive Data Types

Primitive Data Types refer to any value in JavaScript that is not an object.

- undefined
- null
- boolean
- string
- number
- symbol

&nbsp;

## Promises

Stages in creating a `Promise`:

1.  **Wrapping** (syntax / promise structure)
2.  **Thening** (when it works)
3.  **Catching** (recovery / when there's an error)
4.  **Chaining** (long sequences of asynchronous work)

Four states of a `Promise`:

1.  **Fulfilled (Resolved)**
2.  **Rejected**
3.  **Pending**
4.  **Settled**

```js
new Promise(function (resolve, reject) {
  resolve('hi'); // works
  reject('bye'); // can't happen a second time
})
  .then()
  .then()
  .catch();
```

&nbsp;

## Recursive

An alternative to using traditional loops wherein a function is able to call itself.

A function must have at `>= 1` [recursive case](#recursive-case) `&& >= 1` [base case](#base-case) to be recursive.

```js
const countEvenToTwelve = () => {
  if (number <= 12) {
    // Recursive Case
    console.log(number);
    // The function will call itself again and get closer to the base case
    countEvenToTwelve(number + 2);
  }
  // Base case, do nothing when number > 12
};
countEvenToTwelve(0);
// Will output 0, 2, 4, 6, 8, 10, 12 (on new lines, once per **recursion**)
```

### **Recursive Case**

A condition in which a function will be able to continue calling itself while `true`.

&nbsp;
i.e. `number <= 12`

### **Base Case**

A condition in which the function will no longer be able to call itself if `true`.

&nbsp;
i.e. `number > 12`

&nbsp;

## Single Responsibility Principle

Ideally your functions/code should do only one thing.

&nbsp;
i.e. use helper functions to limit duplicate, redundant code or overly complex functions.

&nbsp;

## Stack

A collection of technologies used in a given system.
e.g.

- Server: Node.js
- Middleware: Express
- Templates Engine: EJS
- Database:
- Hosting/Infrastructure: Railway.app

**[MEAN](<https://en.wikipedia.org/wiki/MEAN_(solution_stack)>)** would use MongoDB, Express, Angular, and Node.

&nbsp;

### Full-Stack

A developer who is familiar (preferably very much) with every layer in a stack.

[What is a Full Stack developer?](https://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/)

&nbsp;

### Stack Overflow

An overflow error that happens when a program tries to use more memory space in the call stack than has been allocated to that stack.

&nbsp;

## Testing

<a href='https://codeutopia.net/blog/2015/04/11/what-are-unit-testing-integration-testing-and-functional-testing/'>...Read more</a>

### **Unit Testing**

The practice of testing small pieces of code, typically individual functions, alone and isolated. If your test is using external resources, such as a network or database, it is not a unit test.

### **Integration Testing**

Testing how system parts work together. i.e. An integration test may work alongside a real database to give back test results.

### **Functional Testing**

The testing of complete functionality of an applciation. In regards to web apps, this means using some tool to automate a browser, which is then used to click around on pages to test the application.
