'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      brand.hasMany(models.item);
    }
  }
  brand.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'brand',
  });
  return brand;
};