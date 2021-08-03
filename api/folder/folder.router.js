const{getfolder,getfolderbyid,createfolder,updatefolder,deletefolder}=require("./folder.controller");
const router=require("express").Router();
router.get("/getfolder",getfolder);
router.get("/getfolderbyid/:fid", getfolderbyid);
router.post("/createfolder",createfolder);
router.patch("/updatefolder",updatefolder);
router.delete("/deletefolder/:fid",deletefolder);
module.exports=router;