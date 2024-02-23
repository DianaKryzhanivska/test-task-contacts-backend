const { Contact } = require("../models/contact");
const ctrlWrapper = require("../services/ctrlWrapper");
const httpError = require("../services/httpError");

const getMainPage = async (req, res) => {
  let filter = {};
  const result = await Contact.find(filter);
  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw httpError(404, "Not found");
  }
  res.status(200).json(result);
};

const deleteContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  res.status(204).end();
};

const updateContactById = async (req, res) => {
  const { id } = req.params;
  console.log("Request body:", req.body);
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!result) {
    throw httpError(404, "Contact not found");
  }
  res.status(200).json(result);
};

const addContact = async (req, res) => {
  console.log("Request body:", req.body);
  const result = await Contact.create({ ...req.body });
  res.status(201).json(result);
};

module.exports = {
  getMainPage: ctrlWrapper(getMainPage),
  getContactById: ctrlWrapper(getContactById),
  deleteContactById: ctrlWrapper(deleteContactById),
  updateContactById: ctrlWrapper(updateContactById),
  addContact: ctrlWrapper(addContact),
};
