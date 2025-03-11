const express = require("express");
const {registerUser, loginUser, getProfile,logoutUser} = require("../controllers/authController.js");
const { protect, authorize } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile); 
router.get("/logout", protect, logoutUser);



module.exports = router;