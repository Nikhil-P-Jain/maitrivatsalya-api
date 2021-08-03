const{getvideos,getvideosbyid,createvideos,updatevideos,deletevideos}=require("./videos.service");
module.exports={
    getvideos:(req,res)=>{
        getvideos((error,results)=>{
            if(error){
               return res.json({
                    "success":0,
                    "message":"error"
                });
            }
            return res.json({
                "success":1,
                "data":{results}
            });
        })
    },
    getvideosbyid:(req,res)=>{
        let vid=req.params.vid;
        getvideosbyid(vid,(err,results)=>{
            if(err){
                //console.log(err);
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

    createvideos:(req,res)=>{
        const body=req.body;
        createvideos(body,(error,results)=>{
            if(error){
                console.log(error);
                return res.json({
                    "success":0,
                    "message":"error"
                });
            }
            return res.json({
                "success":1,
                "data":{results}
            });
        })
    },
    updatevideos:(req,res)=>{
        const body=req.body;
        updatevideos(body,(error,results)=>{
            if(error){
                console.log(error);
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            return res.json({
                "success":1,
                "message":"Video Updated Successfully"
            })
        })
    },
    deletevideos:(req,res)=>{
        const vid=req.params.vid;
        deletevideos(vid,(error,results)=>{
            if(results.affectedRows != 0){
                return res.json({
                    "success":1,
                    "message":"successful"
                })
            }
            //if(error){
            else{
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
        })
    }
}