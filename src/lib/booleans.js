const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  return (a || b) && !(a && b);
};

const truthiness = a => {
  return !!a;
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return a % 2 === 1;
};

const isEven = a => {
  return a % 2 === 0;
};

const isSquare = a => {
  return a ** 0.5 % 1 === 0;
};

const startsWith = (char, string) => {
  return string[0] === char;
};

const containsVowels = string => {
  const newString = string.toUpperCase();
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < vowels.length; i++) {
    if (newString.includes(vowels[i])) {
      return true;
    }
  }
  return false;
};

const isLowerCase = string => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
