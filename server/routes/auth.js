const router = require('express').Router();
const userModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation');

router.post('/register', async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await userModel.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  const salt = 10;
  const hashPass = await bcrypt.hash(req.body.password, salt);

  const user = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: hashPass,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user.name });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await userModel.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or password is invalid!");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password!");

  const token = jwt.sign({_id:user._id, name: user.name, email:user.email}, process.env.TOKEN_SECRET);
  res.send(token);
});

module.exports = router;
