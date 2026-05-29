const Scan = require("../models/Scan");

const analyzeEmail = async (req, res) => {

  try {

    const { emailText } = req.body;

    let score = 0;

    let warnings = [];

    const suspiciousWords = [
      "verify",
      "urgent",
      "suspended",
      "click here",
      "bank",
      "password",
      "crypto",
      "gift",
      "winner",
      "login",
    ];

    suspiciousWords.forEach((word) => {

      if (
        emailText
          .toLowerCase()
          .includes(word)
      ) {

        score += 10;

        warnings.push(
          `Suspicious phrase detected: ${word}`
        );

      }

    });

    /* LINKS */

    if (
      emailText.includes("http://") ||
      emailText.includes("https://")
    ) {

      score += 20;

      warnings.push(
        "Email contains links"
      );

    }

    /* URGENCY */

    const urgencyWords = [
      "immediately",
      "urgent",
      "now",
      "asap",
    ];

    urgencyWords.forEach((word) => {

      if (
        emailText
          .toLowerCase()
          .includes(word)
      ) {

        score += 10;

        warnings.push(
          `Urgency tactic detected: ${word}`
        );

      }

    });

    /* FINAL RISK */

    let riskLevel = "Low";

    if (score >= 30)
      riskLevel = "Medium";

    if (score >= 60)
      riskLevel = "High";

    /* SAVE TO DATABASE */

    await Scan.create({

      scanType: "Email Analysis",

      inputData: emailText,

      riskLevel,

      score,

      warnings,

    });

    /* RESPONSE */

    res.json({

      phishingScore: score,

      riskLevel,

      warnings,

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  analyzeEmail,
};