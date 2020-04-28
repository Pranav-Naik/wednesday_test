'use strict';
module.exports = (sequelize, DataTypes) => {
  const trips = sequelize.define('trips', {
    cab_no: DataTypes.STRING,
    cab_type: DataTypes.STRING,
    cab_location: DataTypes.STRING,
    pick_up: DataTypes.STRING,
    drop: DataTypes.STRING,
    cab_driver_name: DataTypes.STRING,
    minimum_fair: DataTypes.DOUBLE,
    estimated_fair: DataTypes.DOUBLE,
    trip_distance: DataTypes.INTEGER,
    booking_status: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    cab_id: DataTypes.INTEGER
  }, {
    tableName: 'trips',
    timestamps: false
  });
  trips.associate = function(models) {
    // associations can be defined here
  };
  return trips;
};