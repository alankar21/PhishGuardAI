const Scan = require("../models/Scan");
const analyzePassword = async (
  req,
  res
) => {

  const { password } = req.body;

  let score = 0;

  let warnings = [];

  /* LENGTH */

  if (password.length >= 8) {

    score += 20;

  } else {

    warnings.push(
      "Password is too short"
    );

  }

  /* UPPERCASE */

  if (/[A-Z]/.test(password)) {

    score += 20;

  } else {

    warnings.push(
      "Add uppercase letters"
    );

  }

  /* LOWERCASE */

  if (/[a-z]/.test(password)) {

    score += 20;

  } else {

    warnings.push(
      "Add lowercase letters"
    );

  }

  /* NUMBERS */

  if (/[0-9]/.test(password)) {

    score += 20;

  } else {

    warnings.push(
      "Add numbers"
    );

  }

  /* SPECIAL CHARACTERS */

  if (
    /[!@#$%^&*]/.test(password)
  ) {

    score += 20;

  } else {

    warnings.push(
      "Add special characters"
    );

  }

  /* FINAL STRENGTH */

  let strength = "Weak";

  if (score >= 60)
    strength = "Medium";

  if (score >= 90)
    strength = "Strong";

  /* CRACK TIME */

  let crackTime = "Few Seconds";

  if (strength === "Medium") {

    crackTime = "Few Days";

  }

  if (strength === "Strong") {

    crackTime = "Centuries";

  }
await Scan.create({

  scanType:
    "Password Analysis",

  inputData: password,

  riskLevel: strength,

  score: score,

  warnings,

});
  res.json({
    passwordStrength: strength,
    score,
    crackTime,
    warnings,
  });

};

module.exports = {
  analyzePassword,
};