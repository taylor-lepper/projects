const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({id}, "jwtsecret", {expiresIn: "24hr"});


}

module.exports = generateToken;