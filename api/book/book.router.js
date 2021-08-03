const{getbook,getbookbyid,createbook,updatebook,deletebook}=require("./book.controller");
const router=require("express").Router();
router.get("/getbook",getbook);
router.get("/getbookbyid/:bid", getbookbyid);
router.post("/createbook",createbook);
router.patch("/updatebook",updatebook);
router.delete("/deletebook/:bid",deletebook);
module.exports=router;