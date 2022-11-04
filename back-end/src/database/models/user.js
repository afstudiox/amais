const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  login: {
    type: DataTypes.STRING,
  },
  senha: {
    type: DataTypes.STRING,
  },
  cpf: {
    type: DataTypes.STRING,
  },
  nascimento: {
    type: DataTypes.DATE,
  },
  sexo: {
    type: DataTypes.STRING,
  },
  estadoCivil: {
    type: DataTypes.STRING,
  },
  escolaridade: {
    type: DataTypes.STRING,
  },
  cursos: {
    type: DataTypes.STRING,
  },
  experienciaProfissional: {
    type: DataTypes.STRING,
  },
  pretensaoSalarial: {
    type: DataTypes.INTEGER,
  },
};

const User = (sequelize) => {
  const User = sequelize.define(
    'User', 
    attributes, 
    {
      tableName: 'Users',
  });

  return User;
}

module.exports = User;