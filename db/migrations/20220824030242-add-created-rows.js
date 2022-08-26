'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'createdAt', UserSchema.createdAt);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'createdAt');
  }
};
