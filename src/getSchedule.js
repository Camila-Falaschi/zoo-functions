const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animals = () => species.map((info) => info.name);
const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const animalDays = (day) => species.filter((animalInfo) => animalInfo.availability.includes(day))
  .map((info) => info.name);

const schedule = () => {
  const daysInfo = days.reduce((acc, day) => ({
    ...acc,
    [day]: {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: animalDays(day),
    },
  }), { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } });
  return daysInfo;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (animals().includes(scheduleTarget)) {
    return species.find((info) => scheduleTarget === info.name).availability;
  }
  if (days.includes(scheduleTarget) || scheduleTarget === 'Monday') {
    const scheduleInfo = schedule();
    return { [scheduleTarget]: scheduleInfo[scheduleTarget] };
  }
  return schedule();
}

module.exports = getSchedule;
