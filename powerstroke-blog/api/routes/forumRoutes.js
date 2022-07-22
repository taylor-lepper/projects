const { Router } = require("express");
const router = Router();
const forumController = require("../controllers/forumController");

router.post("/create", forumController.postCreate);
router.post("/:id", forumController.postEdit);
router.get("/", forumController.getPosts);
router.delete("/:id", forumController.postDelete);

module.exports = router;
