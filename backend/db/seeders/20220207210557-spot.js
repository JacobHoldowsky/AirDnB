'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Spots', [
      {
        city: 'Los Angeles',
        state: 'California',
        country: 'USA',
        price:'248',
        imgUrl:'https://cdn2.lamag.com/wp-content/uploads/sites/6/2018/06/house-los-angeles-getty.jpg',
        userId: 3
      },
      {
        city: 'New York City',
        state: 'New York',
        country: 'USA',
        price: '332',
        imgUrl: 'https://cdn.thespaces.com/wp-content/uploads/2016/11/Homepage-carriage-houses-for-sale-NYC.jpg',
        userId: 1
      },
      {
        city: 'Boca Raton',
        state: 'Florida',
        country: 'USA',
        price: '256',
        imgUrl: 'https://ssl.cdn-redfin.com/photo/106/bigphoto/011/RX-10608011_B.jpg',
        userId: 2
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Spots', null, {});
  }
};
