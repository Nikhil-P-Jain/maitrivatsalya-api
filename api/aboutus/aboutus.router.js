const { createAbout, getAbout , getAboutById , updateAbout , deleteAbout } = require("./aboutus.controller");
const router = require("express").Router();

router.post("/create", createAbout);
router.get("/",getAbout);
router.get("/:id", getAboutById);
router.patch("/update",updateAbout);
router.delete("/delete/:id",deleteAbout);


module.exports = router;