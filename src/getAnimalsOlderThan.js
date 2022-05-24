const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findingAnimal = species.find((info) => info.name === animal).residents
    .map((resident) => resident.age);
  return findingAnimal.every((animalAge) => animalAge >= age);
}

module.exports = getAnimalsOlderThan;
