# Dictionary of Development Vocab

## Table of Contents
* [Callback Functions](#callback-functions)
* [Closures](#closures)
* [Falsy Values](#falsy-values)
* [HTTP](#http)
* [Lexical Scoping](#lexical-scoping)
* [Node: Readline](#node-readline)
* [Primitive Data Types](#primitive-data-types)
* [Recursive](#recursive)
  * [Recursive Case](#recursive-case)
  * [Base Case](#base-case)
* [Single Responsibility Principle](#single-responsibility-principle)
* [Stack Overflow](#stack-overflow)
* [TCP](#tcp---transition-control-protocol)
* [Testing](#testing)
  * [Functional Testing](#functional-testing)
  * [Integration Testing](#integration-testing)
  * [Unit Testing](#unit-testing)
* [URL](#url-uniform-resource-locator)


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
const actionWhenFound = (name, index) => console.log(`Found ${name} at index ${index}!`);

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
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
const useNumber = () => { // Outer (parent) Function
  let number = 5;

  const showNumber = () => { // Inner function
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
The following values are always considered `false` in a `Boolean` context.
  * `false`
  * `undefined`
  * `null`
  * `0`
  * `''`
  * `NaN`

Every other value in Javascript is considered `true` or `truthy`.


&nbsp;
## HTTP
HTTP is a protocol used to read and write "resources" (data) in a simple text-based manner. It started off as being mostly used for HTML documents, but today it's used for all sorts of documents, like JavaScript files, CSS, and anything else that our browser is capable of downloading (PDFs, etc.)

Request-response, text-based protocol.

<a href = 'https://www.w3.org/WhatIs.html'>What is HyperText?</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_flow'>HTTP Overview</a>

**PATH**: Resource the client wants to act on. The path is part of a [URL (Uniform Resource Locator)](#url).

**METHOD**: What action will be performed. There are 9 HTTP request methods.
* `GET`: used to 'get' data from a server
* `POST`: usually used to create some new data
* `PUT`: generally used for editing existing data on the server
* `DELETE`: used to delete some existing data

**Status Code**: Messages sent back to the client from the server. These are some common ones:
* `200`: 'Everything went great'
* `201`: 'The request has succeeded and a new resource has been created'
* `404`: 'Resource not found'
* `500`: 'Server had an error'

Requests and responses both contain key-value based headers (eg: `Accept-Language: fr` || `Content-Type: text/html`)

&nbsp;
## Lexical Scoping
Every inner level of scope, can access its outer levels of scope.


&nbsp;
## Node: Readline

The `node:readline` module provides an interface for reading data from a Readable stream (such as <a href='https://github.com/nodejs/node/blob/main/doc/api/process.md#processstdin'>`process.stdin`</a>) one line at a time.

<a href='https://github.com/nodejs/node/blob/main/doc/api/readline.md'>node:readline Documentation</a>

<a href='https://github.com/nodejs/node/blob/main/doc/api/readline.md#rlquestionquery-options-callback'>rl.question()</a>

<a href='https://github.com/nodejs/node/blob/main/doc/api/readline.md#rlclose'>rl.close()</a>


&nbsp;
## Primitive Data Types
Primitive Data Types refer to any value in JavaScript that is not an object.
  * undefined
  * null
  * boolean
  * string
  * number
  * symbol


&nbsp;
## Recursive
An alternative to using traditional loops wherein a function is able to call itself. 

A function must have at `>= 1` [recursive case](#recursive-case) `&& >= 1` [base case](#base-case) to be recursive.
```js
const countEvenToTwelve = () => {
  if (number <= 12) { // Recursive Case
    console.log(number);
    // The function will call itself again and get closer to the base case
    countEvenToTwelve(number+2);
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
## Stack Overflow
An overflow error that happens when a program tries to use more memory space in the call stack than has been allocated to that stack.


&nbsp;
## TCP - *Transition Control Protocol*
TCP is a specific type of protocol (aka guideline, standard, agreement) which is commonly used to structure the data and workflow of data over the network. 
TCP based communication alows two machines to establish an open channel for two-way data communication. 

&nbsp;
<img src="https://d.pr/i/lH328b+"/>

Just like with a phone call, there is always one side which dials a specific number to establish a connection to the other side. In computer networking, this number is as an IP Address. A computer can have many network-based applications running, much like how a company can have many different offices. For this reason, someone decided to effectively allow for specific phone number extensions. These are referred to as ports in computer networking.

&nbsp;
<img src="https://d.pr/i/xDRacM+"/>


&nbsp;
## Testing
<a href='https://codeutopia.net/blog/2015/04/11/what-are-unit-testing-integration-testing-and-functional-testing/'>...Read more</a>

### **Unit Testing**
The practice of testing small pieces of code, typically individual functions, alone and isolated. If your test is using external resources, such as a network or database, it is not a unit test.

### **Integration Testing**
Testing how system parts work together. i.e. An integration test may work alongside a real database to give back test results.

### **Functional Testing**
The testing of complete functionality of an applciation. In regards to web apps, this means using some tool to automate a browser, which is then used to click around on pages to test the application.


&nbsp;
## URL (Uniform Resource Locator)
<a href='https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL'>What is a URL?</a>

### Anatomy of a URL
<img src='https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL/mdn-url-all.png'/>

* Scheme aka Protocol
  * Usually HTTP or HTTPS (webpages), other schemes such as `mailto:` exist.
  * `://`
* Authority
  * Includes domain and port seperated by `:`. 
* Path
  * Aka path to resource on a web server.
* Parameters
  * Extra parameters provided to the server. Key/value pairs seperated by `&`. Commonly used to return search results and other user input.
* Anchor
  * Anchors to another part of the resource (webpage scrolling to the point the anchor is defined). The fragment identifer (after the `#`) is only used client-side for your browser to act on, it is not sent to the server.