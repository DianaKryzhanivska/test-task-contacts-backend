const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");
const validateBody = require("../../middlewares/validateBody");
const { schemas } = require("../../models/contact");

router.get("/mainpage", ctrl.getMainPage);

router.get("/search", ctrl.getSearchContacts);

router.get("/:id", ctrl.getContactById);

router.delete("/:id", ctrl.deleteContactById);

router.put("/:id", ctrl.updateContactById);

router.post("/add", validateBody(schemas.addContactSchema), ctrl.addContact);

module.exports = router;
