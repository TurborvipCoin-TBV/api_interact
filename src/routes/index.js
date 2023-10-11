const express = require("express");

const router = express.Router();

router.use("/v1/api/test", require("./access"));
router.use("/v1/api/smc", require("./interactionSMC"));

module.exports = router;