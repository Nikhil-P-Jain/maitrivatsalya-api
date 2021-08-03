const{getfolder,getfolderbyid,createfolder,updatefolder,deletefolder}=require("./folder.service");
module.exports={
    getfolder:(req,res)=>{
        getfolder((error,results)=>{
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
    getfolderbyid:(req,res)=>{
        let fid=req.params.fid;
        getfolderbyid(fid,(err,results)=>{
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

    createfolder:(req,res)=>{
        const body=req.body;
        createfolder(body,(error,results)=>{
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
    updatefolder:(req,res)=>{
        const body=req.body;
        updatefolder(body,(error,results)=>{
            if(error){
                console.log(error);
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            return res.json({
                "success":1,
                "message":"Gallery Updated Successfully"
            })
        })
    },
    deletefolder:(req,res)=>{
        const fid=req.params.fid;
        deletefolder(fid,(error,results)=>{
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