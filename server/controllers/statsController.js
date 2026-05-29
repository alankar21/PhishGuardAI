const Scan = require("../models/Scan");

const getStats = async (req, res) => {

  try {

    const scans = await Scan.find();

    const totalScans = scans.length;

    const highRisk = scans.filter(
      scan => scan.riskLevel === "High"
    ).length;

    const mediumRisk = scans.filter(
      scan => scan.riskLevel === "Medium"
    ).length;

    const lowRisk = scans.filter(
      scan => scan.riskLevel === "Low"
    ).length;

    res.json({
      totalScans,
      highRisk,
      mediumRisk,
      lowRisk,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  getStats,
};