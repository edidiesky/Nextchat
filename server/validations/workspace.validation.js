import Joi from "joi";

export const createWorkSpaceSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  slug: Joi.string().min(3).max(100).required(),
 img: Joi.string().uri().optional(),
  description: Joi.string().max(500).optional(),
});

export const updateWorkSpaceSchema = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
  slug: Joi.string().min(3).max(100).optional(),
 img: Joi.string().uri().optional(),
  description: Joi.string().max(500).optional(),
});
