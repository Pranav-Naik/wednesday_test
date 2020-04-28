'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cab_no: {
        type: Sequelize.STRING
      },
      cab_type: {
        type: Sequelize.STRING
      },
      cab_location: {
        type: Sequelize.STRING
      },
      pick_up: {
        type: Sequelize.STRING
      },
      drop: {
        type: Sequelize.STRING
      },
      cab_driver_name: {
        type: Sequelize.STRING
      },
      minimum_fair: {
        type: Sequelize.DOUBLE
      },
      estimated_fair: {
        type: Sequelize.DOUBLE
      },
      trip_distance: {
        type: Sequelize.INTEGER
      },
      booking_status: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      cab_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trips');
  }
};