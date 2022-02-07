'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Bookings', [
      {
        userId: 1,
        spotId: 1,
        numGuests: 2,
        checkInDate: '2022-01-22',
        checkOutDate: '2022-01-25'
      },
      {
        userId: 2,
        spotId: 2,
        numGuests: 4,
        checkInDate: '2022-02-01',
        checkOutDate: '2022-01-04'
      },
      {
        userId: 3,
        spotId: 3,
        numGuests: 1,
        checkInDate: '2021-10-09',
        checkOutDate: '2021-10-11'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
