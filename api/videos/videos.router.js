const{getvideos,getvideosbyid,createvideos,updatevideos,deletevideos}=require("./videos.controller");
const router=require("express").Router();
router.get("/getvideos",getvideos);
router.get("/getvideosbyid/:vid", getvideosbyid);
router.post("/createvideos",createvideos);
router.patch("/updatevideos",updatevideos);
router.delete("/deletevideos/:vid",deletevideos);
module.exports=router;