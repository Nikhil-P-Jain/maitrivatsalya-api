const { createBanner , getBanner , getBannerById , updateBanner , delBanner , deleteBanner } = require("./banner.controller");
const router = require("express").Router();

router.post("/create", createBanner);
router.get("/",getBanner);
router.get("/:id", getBannerById);
router.patch("/update",updateBanner);
router.patch("/softdel",delBanner);
router.delete("/delete/:id",deleteBanner);


module.exports = router;