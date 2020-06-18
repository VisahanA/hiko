const Joi = require('@hapi/joi');
const userModel = require('../db/mongo.model/user.model');
const utils = require('../utils/utils');

module.exports = {
  signUpUser: async (username, password) => {
    const schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().min(3).max(30).required(),
    });

    const { error, value } = schema.validate({ username, password });
    if (error) {
      error.code = 101;
      throw error;
    }

    const hashedPassword = await utils.passwordToHash(value.password);

    const user = await userModel.signUp(username, hashedPassword);
    delete user.password;
    return user;
  },

  login: async (username, password) => {
    const user = await userModel.get(username);
    if (user == null) {
      const error = new Error('User not found');
      error.code = 102
      throw error;
    }

    const passwordCorrect = await utils.passwordChecker(user.password, password);
    if (passwordCorrect) {
      delete user.password;
      return user;
    } else {
      const error = new Error('Wrong password');
      error.code = 101
      throw error;
    }
  },

  getUserCount: async () => {
    return await userModel.usersCount();
  }
};


