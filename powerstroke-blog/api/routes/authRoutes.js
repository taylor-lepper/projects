const { Router } = require("express");
const router = Router();
const authController = require("../controllers/authController");

router.post("/register", authController.postRegister);
router.get("/", authController.getUsers);
router.post("/login", authController.postLogin);

module.exports = router;
