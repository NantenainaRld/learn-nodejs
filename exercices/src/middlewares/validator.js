import Joi from "joi";

export const validateUser = (req, res, next) => {
  const schema = Joi.object({
    userName: Joi.string().alphanum().min(3).required(),
    email: Joi.string().email().required(),
    age: Joi.number().min(18).required(),
    password: Joi.string.min(6).required(),
  });

  const { error } = schema.validate(req.body);

  if (error)
    return res
      .status(400)
      .json({ error: "Bad request", message: error.details[0].message });

  next();
};
