"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mustChangePassword: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "user",
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Users");
  },
};
