const { employees, species } = require('../data/zoo_data');

function getEveryone() {
  const everyone = employees.map((item) => {
    const animals = species.filter(({ id }) => item.responsibleFor.includes(id));
    return {
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      species: animals.map((creature) => creature.name),
      locations: animals.map((creature) => creature.location),
    };
  });
  return everyone;
}

function getEmployeeByName(name) {
  const everyone = getEveryone();
  const person = everyone.find((element) => element.fullName.includes(name));
  if (!person) throw new Error('Informações inválidas');
  return person;
}

function getEmployeeById(id) {
  const everyone = getEveryone();
  const person = everyone.find((element) => element.id.includes(id));
  if (!person) throw new Error('Informações inválidas');
  return person;
}

function getEmployeesCoverage({ name, id } = {}) {
  if (name) return getEmployeeByName(name);
  if (id) return getEmployeeById(id);
  if (!name || !id) return getEveryone();
}

module.exports = getEmployeesCoverage;
