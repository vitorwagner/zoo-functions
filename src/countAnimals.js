const { species } = require('../data/zoo_data');
// Referência utilizada: https://stackoverflow.com/questions/64188099/how-to-reduce-array-of-objects-into-one-object

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, creature) => (
      { ...acc, [creature.name]: creature.residents.length }
    ), {});
  }
  const animalName = species.find((creature) => creature.name === animal.specie);
  if (!animal.sex) {
    return animalName.residents.length;
  }
  return animalName.residents.filter((creature) => creature.sex === animal.sex).length;
}
module.exports = countAnimals;
