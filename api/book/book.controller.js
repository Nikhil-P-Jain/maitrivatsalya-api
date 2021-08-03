const{getbook,getbookbyid,createbook,updatebook,deletebook}=require("./book.service");
module.exports={
    getbook:(req,res)=>{
        getbook((error,results)=>{
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
    getbookbyid:(req,res)=>{
        let bid=req.params.bid;
        getbookbyid(bid,(err,results)=>{
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

    createbook:(req,res)=>{
        const body=req.body;
        createbook(body,(error,results)=>{
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
    updatebook:(req,res)=>{
        const body=req.body;
        updatebook(body,(error,results)=>{
            if(error){
                console.log(error);
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            return res.json({
                "success":1,
                "message":"Book Updated Successfully"
            })
        })
    },
    deletebook:(req,res)=>{
        const bid=req.params.bid;
        deletebook(bid,(error,results)=>{
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