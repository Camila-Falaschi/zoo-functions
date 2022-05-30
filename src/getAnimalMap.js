const data = require('../data/zoo_data');

const location = ['NE', 'NW', 'SE', 'SW'];

const animalsLocation = () => location.reduce((acc, local) => ({
  ...acc,
  [local]: data.species.filter((info) => info.location === local)
    .map((element) => element.name),
}), {});

// A função 'verifyParams' e para as linhas 45 a 48 foram criadas com a orientação e auxilio do Willian Portela - Turma 22 - Tribo A

const verifyParams = (animal, sort, sex) => {
  if (sort && sex) {
    return data.species.find((info) => info.name === animal).residents
      .filter((element) => element.sex === sex)
      .map((animalInfo) => animalInfo.name).sort();
  }
  if (sex) {
    return data.species.find((info) => info.name === animal).residents
      .filter((element) => element.sex === sex)
      .map((animalInfo) => animalInfo.name);
  }
  if (sort) {
    return data.species.find((info) => info.name === animal).residents
      .map((animalInfo) => animalInfo.name).sort();
  }
  return data.species.find((info) => info.name === animal).residents
    .map((animalInfo) => animalInfo.name);
};

const getAnimalsName = (sort, sex) => {
  const object = animalsLocation();
  return location.reduce((acc, direction) => ({
    ...acc,
    [direction]: object[direction].map((animal) => ({
      [animal]: verifyParams(animal, sort, sex) })),
  }), {});
};

function getAnimalMap(options) {
  if (options === undefined) {
    return animalsLocation();
  }
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    return getAnimalsName(sorted, sex);
  }
  return animalsLocation();
}

module.exports = getAnimalMap;
