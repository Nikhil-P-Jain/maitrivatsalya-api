const { createActivity , getActivity , getActivityById , updateActivity , deleteActivity } = require("./activities.controller");
const router = require("express").Router();

router.post("/create", createActivity);
router.get("/",getActivity);
router.get("/:id", getActivityById);
router.patch("/update",updateActivity);
router.delete("/delete/:id",deleteActivity);


module.exports = router;