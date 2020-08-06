const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
} = require('./lib/numbers');

const {
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
} = require('./lib/booleans');

const app = express();
app.use(express.json());

// Strings //
app.get(`/strings/hello/:string`, (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/count/:string', (req, res) => {
  res.status(200).json({ result: countCharacters(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
});

// Numbers //
app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: add(a, b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: subtract(b, a) });
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(a, b) });
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;
  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (a !== 0 && (!a || !b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (a !== 0 && (!a || !b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: remainder(a, b) });
});

// Booleans //
app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:a', (req, res) => {
  if (isNaN(req.params.a)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(req.params.a) });
});

module.exports = app;
