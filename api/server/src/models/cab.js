'use strict';
module.exports = (sequelize, DataTypes) => {
  const cab = sequelize.define('cab', {
    cab_no: DataTypes.STRING,
    cab_driver: DataTypes.STRING
  }, {
    tableName: 'cab',
    timestamps: false
  });
  cab.associate = function(models) {
    // associations can be defined here
  };
  return cab;
};