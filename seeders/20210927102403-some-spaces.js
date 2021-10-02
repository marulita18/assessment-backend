"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("spaces", [
      {
        title: "Mariel's space",
        description: "Welcome to my great space!",
        backgroundColor: "#408080",
        color: "#7B4080",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Giuli's space",
        description: "This is my master piece.",
        backgroundColor: "#404380",
        color: "#807F40",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
