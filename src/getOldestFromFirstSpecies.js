const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  // Para 'reduce' na linha 8 foi consultado o Stack OverFlow (https://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects)
  const employee = () => data.employees.find((person) => person.id === id).responsibleFor[0];
  const findOldestAnimal = data.species.find((animal) => animal.id === employee())
    .residents.reduce((acc, animal) => ((acc.age < animal.age) ? animal : acc));
  return Object.values(findOldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
