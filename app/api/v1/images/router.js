const express = require("express");
const router = express();

router.get("/images", (req, res) => {
  res.status(200).json({
    message: "Halaman Images",
  });
});

module.exports = router;
