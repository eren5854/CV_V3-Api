const express = require("express");
const router = express.Router();
const cvController = require("../controllers/cvController");

router.get("/createDefaultValue", cvController.createDefaultValue);

router.get("/get", cvController.get);

router.post("/set", cvController.set);

module.exports = router;