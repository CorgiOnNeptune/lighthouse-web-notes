# Mocha & Chai
Mocha is a testing framework, while Chai is an assertion library.


### [Chai Library](https://www.chaijs.com/guide/styles/)

&nbsp;
# Installation
```js
npm i mocha@9.2.2 chai --save-dev
```

In package.json
```
"scripts": {
  "test": mocha;
}
```
```
npm test OR npm test test/test.js
```

## Basic Test Setup
```js
const assert = require('chai').assert;
const function = require('../function');

describe('#function', () => {
  it('should return', () => {
    assert.equal(function(), 1);
  });
});
```