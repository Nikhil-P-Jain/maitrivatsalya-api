const{getsubfolder,getsubfolderbyid,getsubfolderbyfid,createsubfolder,updatesubfolder,deletesubfolder}=require("./subfolder.service");
module.exports={
    getsubfolder:(req,res)=>{
        getsubfolder((error,results)=>{
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
    getsubfolderbyid:(req,res)=>{
        const sfid=req.params.sfid;
        getsubfolderbyid(sfid,(err,results)=>{
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
    getsubfolderbyfid:(req,res)=>{
        const fid=req.params.fid;
        getsubfolderbyfid(fid,(err,results)=>{
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

    createsubfolder:(req,res)=>{
        const body=req.body;
        createsubfolder(body,(error,results)=>{
            if(error){
                console.log(error);
                return res.json({
                    "success":0,
                    "message":"error"
                });
            }
            console.log(results);
            return res.json({
                "success":1,
                "data":{results}
            });
        })
    },
    updatesubfolder:(req,res)=>{
        const body=req.body;
        updatesubfolder(body,(error,results)=>{
            if(error){
                console.log(error);
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            return res.json({
                "success":1,
                "message":"Image Updated Successfully"
            })
        })
    },
    deletesubfolder:(req,res)=>{
        const sfid=req.params.sfid;
        deletesubfolder(sfid,(error,results)=>{
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