const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(param) {
  // seu código aqui
  // Para a linha 9 foi consultado o site DEV (https://dev.to/_bigblind/quick-tip-transform-an-array-into-an-object-using-reduce-2gh6) e as seguintes documentações no MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) e (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
  if (param === '' || param === undefined) {
    // acc === accumulator
    return species.reduce((acc, info) => ({ ...acc, [info.name]: info.residents.length }), {});
  }
  const obj = { ...param };
  const { specie, sex } = obj;
  if (sex === undefined) {
    return species.find((info) => info.name === specie).residents.length;
  }
  return species.find((info) => info.name === specie).residents
    .filter((animals) => animals.sex === sex).length;
}

module.exports = countAnimals;
