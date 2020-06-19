const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const HttpStatus = require('http-status-codes');
const config = require('../config/config');
const userModel = require('../db/mongo.model/user.model');
const utils = require('../utils/utils');
const gen = utils.gen;


module.exports = {
  signUp: async (req, res) => {
    const username = req.body['username'];
    const password = req.body['password'];
    const name = req.body['name'];

    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      username: Joi.string().min(3).max(30).required(),
      password: Joi.string().min(3).max(30).required(),
    });

    const { error, value } = schema.validate({ username, password, name });
    if (error) {
      res.send(gen.error(HttpStatus.BAD_REQUEST, error.message));
      return;
    }

    const hashedPassword = await utils.passwordToHash(value.password);

    if ((await userModel.get(username))) {
      res.send(gen.error(HttpStatus.CONFLICT, "user already exists"));
      return;
    }

    const user = await userModel.signUp(username, hashedPassword);
    delete user.password;
    user.token = jwt.sign(user, config.JWT_SECRET);
    res.json(gen.success(HttpStatus.CREATED, user));
  },

  login: async (req, res) => {
    const username = req.body['username'];
    const password = req.body['password'];
    const user = await userModel.get(username);
    if (user == null) {
      res.send(gen.error(HttpStatus.NOT_FOUND, 'User not found'));
      return;
    }

    const passwordCorrect = await utils.passwordChecker(user.password, password);
    if (passwordCorrect) {
      delete user.password;
      user.token = jwt.sign(user, config.JWT_SECRET);
      res.json(gen.success(HttpStatus.CREATED, user));
    } else {
      res.send(gen.error(HttpStatus.UNAUTHORIZED, 'Wrong password'));
    }
  },
}
