const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const quantity = countEntrants(entrants);
  const { child, adult, senior } = data.prices;
  const multiplication = [quantity.child * child, quantity.adult * adult, quantity.senior * senior];
  return multiplication.reduce((acc, price) => acc + price, 0);
}

module.exports = { calculateEntry, countEntrants };
