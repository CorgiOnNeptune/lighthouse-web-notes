# Algorithms in CS / Programming

## Lil' Table of Contents

- [Binary Search](#binary-search)
- [Big O Notation](#big-o-notation)
  - [Arbitrarily Large Inputs](#arbitrarily-large-inputs)
  - [Non-Dominant Terms](#non-dominant-terms)
  - [Drop Constant Terms](#drop-constant-terms)
- [("O n") complexity](#o-n-complexity)

&nbsp;

---

&nbsp;

## Binary Search

Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

&nbsp;

## Big O Notation

**Big O** notation, written as `O()`, describes how the number of steps in an algorithm _scales_ relative to its input. As we increase the amount of data, does the algorithm grow _linearly_, _exponentially_, or _logarithmically_?

Main components of evaluting with **Big O Notation**.

- We only care about arbitrarily large input.
  - What does the run time of binary search look like when we give it an array of one million items?
- We drop the non-dominant terms.
  - When our algorithm had a running time of `(n^2+n)/2`, it was the `n^2` that was hurting us. So we'll just forget about everything else.
- We drop constant terms.
  - If you graph `(n^3)/2` or `(n^3)*2`, it has pretty much the same curve as `n^3`,so let's just get rid of the constant `2`.

&nbsp;

### Arbitrarily Large Inputs

Arbitrarily large inputs ignores these small cases where the runtime/operations for small values doesn't matter.

_Algorithm a_ (Linear):

```js
for (let i = 0; i < array.length; i++) {
  doSomething();
}
for (let i = 0; i < array.length; i++) {
  doSomething();
}
```

_Algorithm b_ (Quadratic):

```js
for (let i = 0; i < array.length; i++) {
  for (let ii = 0; ii < array.length; ii++) {
    doSomething();
  }
}
```

Run times:
| **a** | **b** |
|----------|---------------|
| `4 + 6n` | `2 + 2n + 3n^2` |

Number of operations (with small values):
| **n** | **a** | **b** |
|:-----:|:-----:|:-----:|
| 1 | 10 | 7 |
| 2 | 16 | 18 |
| 3 | 22 | 35 |

Because when `n` gets really big, the more efficient algorithm is easy to identify.

When `n` is 10,000,000, algorithm `b` takes 5 millions times as long as `a`.

Since we shouldn't normally worry about optimizing algorithms dealing with small inputs, **Big O** notation focuses on how an algorithm performs when it's given arbitrarily large input.

&nbsp;

### Non-Dominant Terms

When we evaluate an algorithm using **Big O** notation, we drop the non-dominant terms.

Let's say we have an algorithm that has a running time of `1000n + n^2`. When `n` is small, the `1000n` part of the algorithm is significant. Here's a graph of `n^2` and `n^2 + 1000n` to demonstrate:

![](https://i.imgur.com/7aLClWf.png)

`1000n` makes a difference when `n` is small. However, `1000n` doesn't matter as the value gets arbitrarily large.

![](https://i.imgur.com/gEqddpZ.png)

In **Big O** notation `1000n + n^2` is written as `O(n^2)` aka _O n squared_.

**Big O** only cares about the **highest order term**. Larger exponential, larger term.

If running time was `n^0 + n^1 + n^2 + n^3 + n^4`, it would drop non-dominant terms to become `O(n^4)`.

&nbsp;

### Drop Constant Terms

**Big O** notation is used to describe how an algorithm's complexity grows relative to its input. It is not used to describe the exact running time of an algorithm.

```js
for (let i = 0; i < array.length; i++) {
  // Do 100 different operations in each iteration
}
```

Running time of this algorithm is `2 + (n * 102) or 102n + 2`.

![](https://i.imgur.com/6d6oxA6.png)

When we use **Big O**, we only care about how the complexity grows relative to the input. The constants `2` and `102` will stay constant no matter what happens to the input. These constants don't help describe the growth of the complexity, so we can get rid of them. Since this algorithm grows _linearly_, it is said to have `O(n)` [("O n") complexity](#o-n-complexity).

It's not that the constants aren't significant, it's just that we don't care about them when we're using Big O notation.

&nbsp;

## **("O n") complexity**

Examples:

- **Constant**: `O(1)` will always take the same amount of time to execute.
- **Linear**: `2n + 3` will grow linearly, `O(n)`.
- **Quadratic**: `100n^2` will grow exponentially, `O(n^2)`.
- **Logarithmic**: `log n + 1000000000` will grow logarithmically, `O(log n)`.

&nbsp;

### Constant

An algorithm that will always take the same amount of time to execute, no matter what the input is, runs in constant time.

Examples:

- _Check if the last element in an array is even_. Jump directly to the last element in the array and do some math. Even if it's a lot of math that takes a while, increasing the size of the array will not affect the amount of time this takes.
- _Tell me how many pages are in a phone book_. Just open the last page and read the page number.

**Constant time algorithms run in `O(1)`**.

&nbsp;

### Linear O(n)

When the number of operations an algorithm has to perform grows linearly relative to its input, then that algorithm runs in **linear time**.

Another way to see these algorithms is that when we add one extra element to its input, the number of operations will increase by a constant amount.

The following algorithm is linear, because adding one more item to the array increases the runtime by a constant `100`.

```js
for (item of array) {
  // perform 100 operations
}
```

Examples:

- Count all the even numbers in an array.
- Find someone in a phone book by flipping through every page. Or two pages at a time. Or three pages at a time.

**Linear algorithms run in `O(n)`**.

&nbsp;

### Quadratic O(n^2)

If the number of operations that an algorithm has to perform is directly proportional to the square of the size of the input, then that algorithm runs in **quadratic time**.

The following algorithm is quadratic, because adding one more item to the array increases the runtime by `n*100`.

```js
for (item of array) {
  for (item of array) {
    // perform 100 operations
  }
}
```

Examples:

- Find all duplicates in an array.
- Find the first unique number in an array.
- Manually find duplicate phone numbers written on a sheet of paper.

**Quadratic algorithms run in `O(n^2)`**.

&nbsp;

### Logarithmic O(log n)

If the number of operations that an algorithm has to do is directly proportional to the logarithm of the size of the input, then that algorithm runs in logarithmic time.

The following code is an example of a logarithmic algorithm, because doubling the size of the input only increases the runtime by only one.

```js
let i = array.length;
while (i > 0) {
  i = i / 2;
}
```

[**Binary Search**](#binary-search) is a logarithmic algorithm.

Examples:

- Find all duplicates in an array.
- Find the first unique number in an array.
- Manually find duplicate phone numbers written on a sheet of paper.

**Quadratic algorithms run in `O(log n)`**.
