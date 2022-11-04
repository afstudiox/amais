'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      nome: {
        type: Sequelize.STRING,
      },

      email: {
        type: Sequelize.STRING,
      },

      login: {
        type: Sequelize.STRING,
      },

      senha: {
        type: Sequelize.STRING,
      },

      cpf: {
        type: Sequelize.STRING,
      },

      nascimento: {
        type: Sequelize.DATE,
      },

      sexo: {
        type: Sequelize.STRING,
      },

      estadoCivil: {
        type: Sequelize.STRING,
      },

      escolaridade: {
        type: Sequelize.STRING,
      },

      cursos: {
        type: Sequelize.STRING,
      },

      experienciaProfissional: {
        type: Sequelize.STRING,
      },

      pretensaoSalarial: {
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
