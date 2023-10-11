const express = require("express");
const router = express.Router();
const testCtrl = require("../../controllers/test.controller");
const { asyncHandler } = require("../../helpers/asyncHandler.helper");

// test
router.get("/test-running", asyncHandler(testCtrl.test));

module.exports = router;