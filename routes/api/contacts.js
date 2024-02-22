const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

router.get("/mainpage", ctrl.getMainPage);

module.exports = router;
