const authController = require("../controllers/auth.controller");
const {
  validateSignUpRequestBody,
  validateSignInRequestBody,
} = require("../middlewares/verifyRequestBody");

module.exports = (app) => {
  app.post(
    "/ucanji/api/v1/auth/signup",
    [validateSignUpRequestBody],
    authController.signup
  );
  app.post(
    "/ucan/api/v1/auth/signin",
    [validateSignInRequestBody],
    authController.signin
  );
};
