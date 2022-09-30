const { species } = require('../data/zoo_data');

function getSpeciesMap() {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach(({ name, location }) => map[location].push(name));
  return map;
}

function getAnimalList(animalName, options = { includeNames: false, sorted: false, sex: false }) {
  let list = species.find(({ name }) => name === animalName).residents;
  if (options.sex) list = list.filter((creature) => options.sex === creature.sex);
  return options.sorted ? list.map(({ name }) => name).sort() : list.map(({ name }) => name);
}

function getNamedMap(options) {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach(({ name, location }) => map[location]
    .push({ [name]: getAnimalList(name, options) }));
  return map;
}

function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
  if (!options.includeNames) return getSpeciesMap();
  return getNamedMap(options);
}
module.exports = getAnimalMap;
