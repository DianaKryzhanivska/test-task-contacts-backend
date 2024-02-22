const { Contact } = require("../models/contact");
const ctrlWrapper = require("../services/ctrlWrapper");

const getMainPage = async (req, res) => {
  let filter = {};
  const result = await Contact.find(filter);
  res.json(result);
};

module.exports = {
  getMainPage: ctrlWrapper(getMainPage),
};
