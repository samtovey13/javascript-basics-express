const createPerson = (name, age) => {
  const person = { name, age };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  people.map(person => person.age);
};

const findByName = (name, people) => {
  people.find(obj => obj.name === name);
};

const findHondas = cars => {
  cars.filter(obj => obj.manufacturer === 'Honda');
};

const averageAge = people => {
  const totalAge = people.reduce((a, b) => {
    return a + b.age;
  }, 0);
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  const talkingPerson = {
    name,
    age,
    introduce(friend) {
      return `Hi ${friend}, my name is ${this.name} and I am ${this.age}!`;
    },
  };
  return talkingPerson;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
