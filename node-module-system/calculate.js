import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

export default function calculate(argument1, operator, argument2) {
  if (operator === 'plus') {
    return add(argument1, argument2);
  } else if (operator === 'minus') {
    return subtract(argument1, argument2);
  } else if (operator === 'times') {
    return multiply(argument1, argument2);
  } else if (operator === 'over') {
    return divide(argument1, argument2);
  } else {
    return undefined;
  }
}

const argument1 = Number(process.argv[2]);
const operator = process.argv[3];
const argument2 = Number(process.argv[4]);

const result = calculate(argument1, operator, argument2);
console.log(`Result: ${result}`);
