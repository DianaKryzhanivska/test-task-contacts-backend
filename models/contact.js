const { Schema, model } = require("mongoose");
const handleMongooseError = require("../services/handleMongooseError");
const Joi = require("joi");

const phoneRegex = /^(?:\([0-9]{3}\))?[0-9]{3}[-. ]?[0-9]{4}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    phone: {
      type: String,
      match: phoneRegex,
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
  phone: Joi.string().pattern(phoneRegex).required(),
  email: Joi.string().email(),
});

const schemas = {
  addContactSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
