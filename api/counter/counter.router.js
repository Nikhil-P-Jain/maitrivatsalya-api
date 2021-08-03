const { createCounter, getCounter , getCounterById , updateCounter , deleteCounter } = require("./counter.controller");
const router = require("express").Router();

router.post("/create", createCounter);
router.get("/",getCounter);
router.get("/:id", getCounterById);
router.patch("/update",updateCounter);
router.delete("/delete/:id",deleteCounter);


module.exports = router;