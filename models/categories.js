'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    title: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
    models.dishes.belongsTo(models.categories);
  };
  return categories;
};