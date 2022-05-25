const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  // a linha 7 foi desenvolvida com a orientação e auxilio da instrutora Natássia Siqueira da Trybe
  return employees.some((person) => person.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const manager = isManager(managerId);
  if (manager === true) {
    // a constante 'managedEmployees foi desenvolvida com a orientação e auxilio da instrutora Natássia Siqueira da Trybe
    const managedEmployees = employees.filter((info) => info.managers.includes(managerId))
      .map((chave) => `${chave.firstName} ${chave.lastName}`);
    return managedEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
