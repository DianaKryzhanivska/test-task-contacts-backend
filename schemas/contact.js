const { Schema } = require("mongoose");

const contactSchema = new Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = {
  contactSchema,
};
