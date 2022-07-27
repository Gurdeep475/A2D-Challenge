const { check } = require("express-validator");

const usernameValidation = check("username")
  .notEmpty()
  .withMessage("Username is required")
  .trim()
  .isLength({ min: 3, max: 10 })
  .withMessage("Username must be between 3 and 10 characters");

const passwordValidation = check("password")
  .notEmpty()
  .withMessage("Password is required")
  .isStrongPassword({
    min: 8,
    max: 16,
    hasUppercase: true,
    hasLowercase: true,
    hasNumber: true,
    hasSpecialChar: true,
  })
  .withMessage(
    "Password must be at least 8 characters long, contain at least one number, one special character, one uppercase letter, and one lowercase letter"
  );

module.exports = { usernameValidation, passwordValidation };
