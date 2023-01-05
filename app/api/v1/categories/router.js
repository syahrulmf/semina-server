const express = require("express");
const router = express();
const { create, index, find, update, destroy } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.get("/categories", authenticateUser, authorizeRoles("organizer"), index);
router.get("/categories/:id", authenticateUser, find);
router.post("/categories", authenticateUser, create);
router.put("/categories/:id", authenticateUser, update);
router.delete("/categories/:id", authenticateUser, destroy);

module.exports = router;
