const { species, hours } = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (species.some(({ name }) => name === scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  const schedule = Object.entries(hours).reduce(
    (acc, [weekday, { open, close }]) => ({
      ...acc,
      [weekday]: {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: species.filter((creature) => creature.availability
          .includes(weekday))
          .map((creature) => creature.name),
      },
    }),
    {},
  );
  schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  return schedule[scheduleTarget] ? { [scheduleTarget]: schedule[scheduleTarget] } : schedule;
}
module.exports = getSchedule;
