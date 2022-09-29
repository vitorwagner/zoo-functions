const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, olderThan) {
  return species.find(({ name }) => name === animal).residents.every(({ age }) => age >= olderThan);
}

module.exports = getAnimalsOlderThan;
