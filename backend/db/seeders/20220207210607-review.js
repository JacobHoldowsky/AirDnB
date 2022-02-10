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
        userId: 2,
        spotId: 1,
        reviewContent: "This place is perfect for a stay in LA. The location was great. It’s literally a 5 minute walk to the metro station but it’s also very central. To be honest I️ rarely used public transportation because it was always convenient to just walk but when I️ needed to it was right there. There’s lots of restaurants and life around but in the house itself it’s completely quiet. It’s very clean and comfortable and has everything you could need. I️ would 100% recommend a stay here."
      },
      {
        userId: 1,
        spotId: 1,
        reviewContent: "The apartment is very nice and comfortable! Location is very convenient, near shops and public transport. Wanda was very helpful and friendly, she’s a super host!"
      },
      {
        userId: 2,
        spotId: 2,
        reviewContent: "We had a great time at this place. The communication was super easy and quick and the place looks exactly like it does on the picture. The neighborhood is very conveniently located and although it’s a lively neighborhood the house is very quiet! Would absolutely recommend to stay there!"
      },
      {
        userId: 3,
        spotId: 2,
        reviewContent: 'Couldn’t have been better. Apartment was beautiful and equipped with everything I needed (and lots of lovely touches / local design). Mr. Lition was very helpful and the location was great.'
      },
      {
        userId: 3,
        spotId: 3,
        reviewContent: "Howard is incredible. He was very accommodating and very quick to respond with any questions. He is also flexible with check-in and check-out time, which was extremely helpful. The place was very clean and had all of the necessities for a few night stay. There were also more hamburger joints than one would expect which was a nice surprise!"
      },
      {
        userId: 1,
        spotId: 3,
        reviewContent: "Howard's place is a quiet, clean, spacious and calming place. It is very near a bunch of hamburger joints and close to all the lovely shops and bars of the area. But you can’t hear the noise of the streets in the apartment. The whole place made us feel at ease. Howard was very nice, easy to talk to and very friendly when he welcomed us. I would definitely come again!"
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
