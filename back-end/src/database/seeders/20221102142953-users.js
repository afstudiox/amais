'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Users',
    [{
      id: 1,
      nome: 'João da Silva',
      email: 'joaosilva@gmail.com',
      login: 'joaosilva',
      senha: '123456',
      cpf: '12345678901',
      nascimento: '1990-01-01',
      sexo: 'Masculino',
      estadoCivil: 'Solteiro',
      escolaridade: 'Ensino Médio',
      cursos: 'Curso de Informática',
      experienciaProfissional: 'Estágio em Informática',
      pretensaoSalarial: 2000,
      createdAt: Sequelize.fn('now'),
      updatedAt: Sequelize.fn('now'),
    },
    {
      id: 2,
      nome: 'Maria da Silva',
      email: 'mariasilva@gmail.com',
      login: 'mariasilva',
      senha: '123456',
      cpf: '12345678902',
      nascimento: '1991-01-01',
      sexo: 'Feminino',
      estadoCivil: 'Casada',
      escolaridade: 'Superior',
      cursos: 'Engenharia de Software',
      experienciaProfissional: 'Analista de Sistemas',
      pretensaoSalarial: 5000,
      createdAt: Sequelize.fn('now'),
      updatedAt: Sequelize.fn('now'),
    },
    {
      id: 3,
      nome: 'Pedro da Silva',
      email: 'pedrosilva@gmail.com',
      login: 'pedrosilva',
      senha: '123456',
      cpf: '12345678903',
      nascimento: '1993-01-01',
      sexo: 'Masculino',
      estadoCivil: 'Solteiro',
      escolaridade: 'Pós-Graduação',
      cursos: 'Pós-Graduação em Engenharia de Software',
      experienciaProfissional: 'Coordenador de Projetos',
      pretensaoSalarial: 9000,
      createdAt: Sequelize.fn('now'),
      updatedAt: Sequelize.fn('now'),
    },
    ]);
  },

  async down (queryInterface) {
    queryInterface.bulkDelete('Users', null, {});
  }
};
