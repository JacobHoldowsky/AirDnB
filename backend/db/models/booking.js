'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numGuests: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    checkInDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    checkOutDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {});
  Booking.associate = function (models) {
    // associations can be defined here
    Booking.belongsTo(models.User, { foreignKey: 'userId' })
    Booking.belongsTo(models.Spot, { foreignKey: 'spotId' })
  };
  return Booking;
};