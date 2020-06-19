const bcrypt = require("bcrypt");

const responseGenerator = {
  error: (code, message) => {
    return { success: false, code, error: message }
  },
  success: (code, obj) => {
    return { success: true, code, ...obj }
  },
};

module.exports = {
  passwordToHash: async (password) => {
    return await bcrypt.hash(password, 10);
  },
  passwordChecker: async (hash, password) => {
    return await bcrypt.compare(password, hash);
  },
  gen: responseGenerator,
};
