const mongoose = require("mongoose");

const scanSchema =
  new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      scanType: {
        type: String,
        required: true,
      },

      inputData: {
        type: String,
        required: true,
      },

      riskLevel: {
        type: String,
      },

      score: {
        type: Number,
      },

      warnings: [
        String,
      ],
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Scan",
    scanSchema
  );