const data = require('../data/zoo_data');

const locations = (animals) => animals.map((element) =>
  data.species.find((info) => info.name === element).location);

const species = (animalsId) => animalsId.map((element) =>
  data.species.find((info) => info.id === element).name);

const object = (employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: species(responsibleFor),
    locations: locations(species(responsibleFor)),
  };
};

const allEmployees = () => data.employees.map((info) => object(info));

function getEmployeesCoverage(param) {
  // seu código aqui
  if (param === undefined) {
    return allEmployees();
  }
  const { name, id } = param;
  const employeesData = data.employees;
  const employee = () => employeesData.find((info) =>
    info.firstName === name || info.lastName === name || info.id === id);
  if (employee() === undefined) {
    throw new Error('Informações inválidas');
  }
  return object(employee());
}

module.exports = getEmployeesCoverage;
