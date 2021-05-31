const jwt = require("jsonwebtoken");

//for any route
function authorize(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access is denied!");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid request!");
  }
}

module.exports = authorize;