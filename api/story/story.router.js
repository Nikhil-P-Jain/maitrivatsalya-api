const{getstory,getstorybyid,createstory,updatestory,deletestory}=require("./story.controller");
const router=require("express").Router();
router.get("/getstory",getstory);
router.get("/getstorybyid/:sid", getstorybyid);
router.post("/createstory",createstory);
router.patch("/updatestory",updatestory);
router.delete("/deletestory/:sid",deletestory);
module.exports=router;