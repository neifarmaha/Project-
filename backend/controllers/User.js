const User = require("../model/User");
// const bcrypt = require("bcrypt");
const config = require('config');
const jwt = require('jsonwebtoken');
const secret = config.get('secret');
const bc = require('bcryptjs');




const saltRounds = 10;
// var jwt = require("jsonwebtoken");



const register = async (req, res) => {
  const { firstName, lastName,role, email, phonenumber, address, password } =
    req.body;
  try {
    const existeUser = await User.findOne({ email });
    if (existeUser) {
      return res.status(400).json([{ msg: "user already exist" }]);
    }
    const user = await new User({
      firstName,
      lastName,
      role,
      email,
      phonenumber,
      address,
      password,
    });

    
    const salt = await bc .genSalt(saltRounds);
    user.password = await bc .hash(password, salt);
    await user.save();
    const payload = {
      userID: user._id,
    };
    var token = jwt.sign(payload,secret);

    res.send({
      token,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        role:user.role,
        email: user.email,
        phonenumber: user.phonenumber,
        address: user.address,
        password: user.password,
      },
    });
    
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json([{ msg: "you should register first" }]);
    }
    const exist = bc .compare(password, user.password);
    if (!exist) {
      return res.status(400).json([{ msg: "bad Credential" }]);
    }
    const payload = {
      userID: user._id,
    };
    var token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        email: user.email,
        phonenumber: user.phonenumber,
        address: user.address,
        password: user.password,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const getAuth = (req, res) => {
  res.send(req.user);
};

module.exports = { register, login, getAuth };