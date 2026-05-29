const jwt = require("jsonwebtoken");

const generateToken = (id) => {

  return jwt.sign(
    { id },
    "phishguardsecret",
    {
      expiresIn: "7d",
    }
  );

};

module.exports = generateToken;