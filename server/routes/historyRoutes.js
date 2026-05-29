const express = require("express");

const router = express.Router();

const {
  getScanHistory,
} = require(
  "../controllers/historyController"
);

router.get(
  "/",
  getScanHistory
);

module.exports = router;