const jwt = require('jsonwebtoken');
const config = require('./../config/config');
const userModel = require('../db/mongo.model/user.model');

module.exports = {
  getUserCount: async () => {
    return await userModel.usersCount();
  },
  // Returns the decoded token data, if signature invalid returns null
  getDataToken: async (token) => {
    return new Promise((resolve) => {
      jwt.verify(token, config.JWT_SECRET, (err, data) => {
        if (err) resolve(null);
        else (resolve(data));
      });
    })
  }
};


