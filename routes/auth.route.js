const authController = require("../controllers/auth.controller");
const {
  validateSignUpRequestBody,
  validateSignInRequestBody,
} = require("../middlewares/verifyRequestBody");

module.exports = (app) => {
  app.post(
    "/crm/api/v2/auth/signup",
    [validateSignUpRequestBody],
    authController.signup
  );
  app.post(
    "/crm/api/v2/auth/signin",
    [validateSignInRequestBody],
    authController.signin
  );
};
