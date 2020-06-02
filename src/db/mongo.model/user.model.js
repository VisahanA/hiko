const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true, useNestedStrict: true, versionKey: false });

const model = mongoose.model("User", schema, "user");

module.exports = {
  signUp: async (username, password) => {
    const data = await model.create({ username, password });
    return JSON.parse(JSON.stringify(data));
  },
  get: async (username) => {
    const data = await model.findOne({ username });
    return JSON.parse(JSON.stringify(data));
  }
};
