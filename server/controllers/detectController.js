const Scan = require(
  "../models/Scan"
);
const detectURL = async (
  req,
  res
) => {

  const { url } = req.body;

  let score = 0;

  let warnings = [];

  /* HTTPS */

  if (
    !url.startsWith("https://")
  ) {

    score += 20;

    warnings.push(
      "HTTPS missing"
    );

  }

  /* SUSPICIOUS WORDS */

  const suspiciousWords = [
    "login",
    "verify",
    "bank",
    "secure",
    "paypal",
  ];

  suspiciousWords.forEach((word) => {

    if (
      url
        .toLowerCase()
        .includes(word)
    ) {

      score += 10;

      warnings.push(
        `Suspicious keyword: ${word}`
      );

    }

  });

  /* LONG URL */

  if (url.length > 75) {

    score += 15;

    warnings.push(
      "Very long URL"
    );

  }

  /* IP URL */

  const ipRegex =
    /(\d{1,3}\.){3}\d{1,3}/;

  if (ipRegex.test(url)) {

    score += 25;

    warnings.push(
      "IP-based URL"
    );

  }

  /* FINAL RISK */

  let riskLevel = "Low";

  if (score >= 30)
    riskLevel = "Medium";

  if (score >= 60)
    riskLevel = "High";
  
await Scan.create({

  scanType: "URL Scan",

  inputData: url,

  riskLevel,
  score,

  warnings,

});
  res.json({
    url,
    phishingScore: score,
    riskLevel,
    warnings,
  });

};

module.exports = {
  detectURL,
};