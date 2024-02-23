const { Schema } = require("mongoose");
const Joi = require("joi");
const handleMongooseError = require("../services/handleMongooseError");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.number().required(),
  email: Joi.string().email(),
});

module.exports = {
  contactSchema,
  addContactSchema,
};
