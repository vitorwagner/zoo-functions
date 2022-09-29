const { employees } = require('../data/zoo_data');
// Referência para o return usando OR: https://eloquentjavascript.net/01_values.html#i_3jN0iK4yKW

function getEmployeeByName(employeeName) {
  const gotEmployee = employees.find((({ firstName, lastName }) => firstName === employeeName
  || lastName === employeeName));
  return gotEmployee || {};
}

module.exports = getEmployeeByName;
