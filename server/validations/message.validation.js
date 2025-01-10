import Joi from "joi";

export const createMessageSchema = Joi.object({
  body: Joi.string().min(3).max(150).required(),
 img: Joi.string().uri().optional(),
});

export const updateMessageSchema = Joi.object({
  body: Joi.string().min(3).max(50).required(),
 img: Joi.string().uri().optional(),
});
