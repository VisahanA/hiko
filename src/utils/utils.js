const bcrypt = require("bcrypt");

module.exports = {
  passwordToHash: async (password) => {
    return await bcrypt.hash(password, 10);
  },
  passwordChecker: async (hash, password) => {
    return await bcrypt.compare(password, hash);
  },
};
