const express = require("express");

const router = express.Router();

const {
  detectURL,
} = require(
  "../controllers/detectController"
);

router.post(
  "/scan",
  detectURL
);

module.exports = router;