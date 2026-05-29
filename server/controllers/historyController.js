const Scan = require("../models/Scan");

const getScanHistory = async (
  req,
  res
) => {

  try {

    const scans =
      await Scan.find()
        .sort({
          createdAt: -1,
        });

    res.status(200).json(
      scans
    );

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message:
        "Failed to fetch scan history",
    });

  }

};

module.exports = {
  getScanHistory,
};