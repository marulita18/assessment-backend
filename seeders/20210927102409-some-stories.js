"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("stories", [
      {
        name: "How all this begun",
        content:
          "Last year, I created a band with my sister and after seven months of nonstop recording hours, we finished our first album.",
        imageUrl:
          "https://images.saymedia-content.com/.image/t_share/MTc0OTkyNjcxNjUwMTYyNjU2/100-best-all-female-rock-bands.jpg",
        spaceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "My second album is coming soon",
        content:
          "I'm super happy to let you all know that in two month, my second recording will be available in Spotify.",
        imageUrl:
          "https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_Blonde-1200x1200.jpg",
        spaceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Our first show!",
        content:
          "We are super excited to let you know that next spring we our playing live for the first time in ages! We hope to see you all there!",
        imageUrl:
          "https://www.uade.edu.ar/media/1o3j021v/odradi0.jpg?anchor=center&mode=crop&width=1240&height=910&rnd=132266733783100000",
        spaceId: 1,
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
