const router = require("express").Router();
const user = require('../mode/user')

router.post("/register", (req, res) => {
     const user = new user({
         name: req.body.name,
         email: req.body.email,
         password:req.body.password
     })
});
