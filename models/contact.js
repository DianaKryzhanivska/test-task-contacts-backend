const { Schema, model } = require("mongoose");
const handleMongooseError = require("../services/handleMongooseError");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
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

const schemas = {
  addContactSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
