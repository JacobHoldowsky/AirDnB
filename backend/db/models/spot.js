'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Spot.associate = function (models) {
    // associations can be defined here
    Spot.hasMany(models.Booking, { foreignKey: 'spotId' })
    Spot.hasMany(models.Review, { foreignKey: 'spotId' })
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Spot;
};