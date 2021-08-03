const { createBanner , getBanner , getBannerById , updateBanner , delBanner , deleteBanner} = require("./banner.service");

module.exports = {
    createBanner:(req,res)=>{
        const body=req.body;
        createBanner(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    data:results.affectedRows + " "+ "Banner created Successfully!"
                })
            }
        })
    },

    getBanner:(req,res)=>{
        getBanner((err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                })
            }
            return res.status(200).json({
                success:1,
                data:{results}
            })
        })
    },

    getBannerById:(req,res)=>{
        let id=req.params.id;
        getBannerById(id,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                })
            }
            return res.status(200).json({
                success:1,
                data:{results}
            })
        })
    },

    updateBanner:(req,res)=>{
        const body=req.body;
        updateBanner(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database Connection Error"
                })
            }

            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:"Banner Updated Successfully!!"
                })
            }
        })
    },

    deleteBanner:(req,res)=>{
        let id=req.params.id;
        deleteBanner(id,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database Connection Error"
                })
            }

            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:"Banner Deleted Successfully"
                })
            }
        })
    },

    delBanner:(req,res)=>{
        const body=req.body;
        delBanner(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database Connection Error"
                })
            }

            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:"Banner Deactivated Successfully!!"
                })
            }
        })
    },
}