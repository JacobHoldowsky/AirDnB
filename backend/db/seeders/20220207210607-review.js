'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        spotId: 1,
        reviewContent: "Was totally awesome."
      },
      {
        userId: 2,
        spotId: 2,
        reviewContent: "The hosts could have been a little more hospitable."
      },
      {
        userId: 3,
        spotId: 3,
        reviewContent: "It was like a party. 24/7."
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
