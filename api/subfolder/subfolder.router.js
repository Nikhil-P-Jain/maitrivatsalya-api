const{getsubfolder,getsubfolderbyid,getsubfolderbyfid,createsubfolder,updatesubfolder,deletesubfolder}=require("./subfolder.controller");
const router=require("express").Router();
router.get("/getsubfolder",getsubfolder);
router.get("/getsubfolderbyid/:sfid", getsubfolderbyid);
router.get("/getsubfolderbyfid/:fid",getsubfolderbyfid)
router.post("/createsubfolder",createsubfolder);
router.patch("/updatesubfolder",updatesubfolder);
router.delete("/deletesubfolder/:sfid",deletesubfolder);
module.exports=router;