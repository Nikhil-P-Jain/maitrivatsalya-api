const { createInspire , getInspire , getInspireById , updateInspire , deleteInspire } = require("./inspire.controller");
const router = require("express").Router();

router.post("/create", createInspire);
router.get("/",getInspire);
router.get("/:id", getInspireById);
router.patch("/update",updateInspire);
router.delete("/delete/:id",deleteInspire);


module.exports = router;