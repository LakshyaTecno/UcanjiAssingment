const User = require("../models/user.model");
const validateSignUpRequestBody = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).send({
        message: "Failed! User name is not provided",
      });
    }

    if (!req.body.phoneNumber) {
      return res.status(400).send({
        message: "Failed! phoneNumber is not provided",
      });
    }

    try {
      const user = await User.findOne({ phoneNumber: req.body.phoneNumber });

      if (user != null) {
        return res.status(400).send({
          message: "Failed! phoneNumber is already taken",
        });
      }
    } catch (err) {
      return res.status(500).send({
        message: "Internal server error while validating the sign-up request",
      });
    }

    if (!req.body.password) {
      return res.status(400).send({
        message: "Failed! Password is not provided",
      });
    }

    next();
  } catch {
    console.log(
      "#### Error while validating sign-up request body ##### ",
      err.message
    );
    res.status(500).send({
      message: "Internal server error while sign-up validation",
    });
  }
};

const validateSignInRequestBody = (req, res, next) => {
  if (!req.body.phoneNumber) {
    return res.status(400).send({
      message: "Failed ! UserId is not provided",
    });
  }

  if (!req.body.password) {
    return res.status(400).send({
      message: "Failed ! Password is not provided",
    });
  }

  next();
};

const verifyRequestBodiesForAuth = {
  validateSignUpRequestBody,
  validateSignInRequestBody,
};

module.exports = verifyRequestBodiesForAuth;
