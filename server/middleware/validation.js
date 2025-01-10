import { BAD_REQUEST_STATUS_CODE } from "../constants.js";

export const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(BAD_REQUEST_STATUS_CODE).json({
      error: error.details.map((detail) => detail.message).join(""),
    });
  }
  next();
};
