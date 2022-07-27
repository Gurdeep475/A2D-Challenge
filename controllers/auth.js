const { validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Registration of a New User
exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ message: "Some Error Occured", error: errors });
    }
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.json({ message: "User Created Successfully", user: createdUser });
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: "error", error: "Username already in use" });
    }
    throw error;
  }
};

// Login of a New User
exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ message: "Some Error Occured", error: errors });
    }

    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("Invalid Username/Password");
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (matchPassword) {
      const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        process.env.JWT_SECRET
      );
      return res.json({ status: "Ok", token: token });
    } else {
      throw new Error("Invalid Username/Password");
    }
  } catch (error) {
    return res.json({ message: "Some Error Occured", error: error.message });
  }
};

// Resetting Password using JWT Token
exports.changePassword = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ message: "Some Error Occured", error: errors });
    }

    const { password } = req.body;
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id });
    if (!user) {
      throw new Error("Invalid Token");
    }
    const newPassword = await bcrypt.hash(password, 10);
    await User.updateOne({ _id: decoded.id }, { password: newPassword });
    return res.json({ message: "Password Reset Successfully" });
  } catch (error) {
    return res.json({ message: "Some Error Occured", error: error.message });
  }
};

// Validates whether a user is loggedIn or Not, for protecting routes
exports.isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id });
    if (!user) {
      throw new Error("Invalid Token");
    }
    req.user = user;
    next();
  } catch (error) {
    return res.json({ message: "Some Error Occured", error: error.message });
  }
};
