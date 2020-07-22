const getNthElement = (index, array) => {
  while (index >= array.length) {
    index -= array.length;
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  array.concat([element]);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  numbers.map(number => String(number));
};

const uppercaseWordsInArray = strings => {
  return strings.map(word => word.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(word =>
    word
      .split('')
      .reverse()
      .join(''),
  );
};

const onlyEven = numbers => {
  return numbers.filter(num => num % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const spliceArr = [...array]; // creates a clone //
  spliceArr.splice(index, 1);
  return spliceArr;
};

const elementsStartingWithAVowel = strings => {
  function startsWithVowel(str) {
    const vowelRegex = '^[aieouAIEOU].*';
    if (str.match(vowelRegex)) {
      return str;
    }
  }
  return strings.filter(startsWithVowel);
};

const removeSpaces = string => {
  string.split(' ').join('');
};

const sumNumbers = numbers => {
  const sum = numbers.reduce(function(total, num) {
    return total + num;
  }, 0);
  return sum;
};

const sortByLastLetter = strings => {
  function lastCharVal(str) {
    return str.charCodeAt(str.length - 1);
  }
  return strings.sort(function(a, b) {
    return lastCharVal(a) - lastCharVal(b);
  });
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
