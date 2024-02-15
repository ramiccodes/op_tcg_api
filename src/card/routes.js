const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getCards);
router.get("/:id", controller.getCardById);

module.exports = router;
