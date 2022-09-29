const { prices } = require('../data/zoo_data');
// Referência: https://www.freecodecamp.org/news/how-to-count-objects-in-an-array/

function countEntrants(entrants) {
  const count = {
    child: entrants.filter((item) => item.age < 18).length || 0,
    adult: entrants.filter((item) => item.age >= 18 && item.age < 50).length || 0,
    senior: entrants.filter((item) => item.age >= 50).length || 0,
  };

  return count;
}

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) {
    return 0;
  }
  const count = countEntrants(entrants);
  return count.child * prices.child + count.adult * prices.adult + count.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
