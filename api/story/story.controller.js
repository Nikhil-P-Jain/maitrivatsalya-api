const{getstory,getstorybyid,createstory,updatestory,deletestory}=require("./story.service");
module.exports={
    getstory:(req,res)=>{
        getstory((error,results)=>{
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
    getstorybyid:(req,res)=>{
        let sid=req.params.sid;
        getstorybyid(sid,(err,results)=>{
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

    createstory:(req,res)=>{
        const body=req.body;
        createstory(body,(error,results)=>{
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
    updatestory:(req,res)=>{
        const body=req.body;
        updatestory(body,(error,results)=>{
            if(error){
                console.log(error);
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            return res.json({
                "success":1,
                "message":"Story Updated Successfully"
            })
        })
    },
    deletestory:(req,res)=>{
        const sid=req.params.sid;
        deletestory(sid,(error,results)=>{
            if(results.affectedRows!=0)
            {
                return res.json({
                    "success":1,
                    "message":"successful"
                })
            }
            else{
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
        })
    }
}