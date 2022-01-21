'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false, //harus diisi
        autoIncrement: true, //setiap ada data bertambah
        primaryKey: true, //identitas 
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM("active" , "nonactive"),
        defaultValue: "active",
      },
      jeniskelamin: {
        type: Sequelize.ENUM("laki-laki" , "perempuan"),
        defaultValue: "laki-laki",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};