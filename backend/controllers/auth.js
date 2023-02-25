const { User } = require("../models/Users");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const axios = require("axios");
const brcypt = require("bcryptjs");

function genrateToken(user) {
  const { _id, name, email, userimg } = user;
  return jwt.sign(
    {
      _id,
      name,
      email,
      userimg,
    },
    config.JWT_SECRET_KEY
  );
}
async function register(req, res) {
  try {
    let { name, email, gender, password, userimg } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send({
        error: "Fill all required fields",
      });
    }
    let user = await User.findOne({
      email,
    });
    if (user) {
      return res.status(400).send({
        error: "Email already exists..",
      });
    }
    password = brcypt.hashSync(password);
    user = await User.create({
      name,
      email,
      gender,
      password,
      userimg,
    });
    return res.status(201).send({
      message: "Registration Sucessfull!!",
    });
  } catch (error) {
    return res.status(500).send({
      error: "Something went wrong.",
      log: function () {
        console.error(error.message);
      },
    });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({
      email,
    });
    if (!user) {
      return res.send({
        responce: "login_error",
      });
    }
    if (brcypt.compareSync(password, user.password)) {
      const token = genrateToken(user);
      const { _id, name, image, gender, email } = user;
      return res.send({
        responce: "login_sucess",
        message: "Login Sucessfully!!!",
        token: token,
        data: {
          userId: _id,
          name: name,
          img: image,
          email: email,
          gender: gender,
        },
      });
    } else {
      return res.send({
        responce: "login_error",
      });
    }
  } catch (error) {
    return res.status(500).send({
      error: "Something went wrong.",
      log: function () {
        console.error(error.message);
      },
    });
  }
}

module.exports = {
  login,
  register,
};
