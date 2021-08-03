const{getvision,getvisionbyid,createvision,updatevision,deletevision}=require("./vision.service");
module.exports={
    getvision:(req,res)=>{
        getvision((error,results)=>{
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
    getvisionbyid:(req,res)=>{
        let vid=req.params.vid;
        getvisionbyid(vid,(err,results)=>{
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

    createvision:(req,res)=>{
        const body=req.body;
        createvision(body,(error,results)=>{
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
    updatevision:(req,res)=>{
        const body=req.body;
        updatevision(body,(error,results)=>{
            if(error){
                console.log(error);
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            return res.json({
                "success":1,
                "message":"Vision Updated Successfully"
            })
        })
    },
    deletevision:(req,res)=>{
        const vid=req.params.vid;
        deletevision(vid,(error,results)=>{
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