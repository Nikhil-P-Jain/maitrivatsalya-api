const{getvision,getvisionbyid,createvision,updatevision,deletevision}=require("./vision.controller");
const router=require("express").Router();
router.get("/getvision",getvision);
router.get("/getvisionbyid/:vid", getvisionbyid);
router.post("/createvision",createvision);
router.patch("/updatevision",updatevision);
router.delete("/deletevision/:vid",deletevision);
module.exports=router;