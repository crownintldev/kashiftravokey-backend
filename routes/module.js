const express = require("express");
const router = express.Router();

const { authenticate } = require("../common/middleware/authenticate");
const {
  addModule,
  editModule,
  deleteModule,
  getModule,
  getModuleList,
} = require("../common/controllers/moduleController");
const abilityProvider = require("../common/middleware/abilityProvider");

router.post("/addModule", authenticate, abilityProvider, addModule);
router.post("/editModule", authenticate, editModule);
router.post("/deleteModule", authenticate, deleteModule);
router.get(
  "/getModuleList/:query",
  authenticate,
  abilityProvider,
  getModuleList
);

module.exports = router;
