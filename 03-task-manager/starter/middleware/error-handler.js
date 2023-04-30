const { CustomApiError } = require("../error/cutsom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ __msg__: err.message });
  }
  return res.status(500).json({ msg_: "SomeThing Went Wrong !" });
};

module.exports.ErrorHandler = errorHandler;
