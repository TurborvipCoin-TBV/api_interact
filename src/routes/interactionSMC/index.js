const express = require("express");
const router = express.Router();
const SMCController = require("../../controllers/smc.controller");
const { asyncHandler } = require("../../helpers/asyncHandler.helper");

// withdraw
router.post("/withdraw", asyncHandler(SMCController.withdraw));

module.exports = router;