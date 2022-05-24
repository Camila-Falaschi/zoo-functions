const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Para o argumento '...ids' e return 'ids' foi recebido orientação do Márcio Daniel, na Mentoria Técnica da Trybe.

function getSpeciesByIds(...ids) {
  // param === parameter
  return ids.map((param) => species.find((animal) => animal.id === param));
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
