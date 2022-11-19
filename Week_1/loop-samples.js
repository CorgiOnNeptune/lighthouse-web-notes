const sumStrings = (numbers) => {
  let sum = 0;

  // for (let i = 0; i < numbers.length; i++) {
  //   console.log('c style i', i);
  //   console.log('c style value', numbers[i])
  //   sum += Number(numbers[i]);
  // }

  // for (let key in numbers) {
  //   console.log('key from "in" loop', key);
  //   console.log('value from "in" loop', numbers[key]);
  //   sum += Number(numbers[key]);
  // }

  for (let value of numbers) {
    if (value < 0 || value % 1 !== 0) {
      return;
    }
    console.log('value from "of" loop', value);
    sum += value;
  }

  return sum;
};

const args = process.argv.slice(2);
console.log(sumStrings(args));


// Number() and paresInt() both work!