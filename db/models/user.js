'use strict'
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    email: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN
  }, {})
  user.associate = function(models) {
    // associations can be defined here
  }
  return user
}