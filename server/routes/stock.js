/** @format */

const router = require("express").Router();
const { getStock, updateStock } = require("../controllers/stockController");

router.get("/:id", getStock);
router.put("/:id", updateStock);

module.exports = router;
