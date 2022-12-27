const express = require("express");
const router = express();

router.get("/order", (req, res) => {
  res.status(200).json({
    message: "Halaman Order",
  });
});

module.exports = router;
