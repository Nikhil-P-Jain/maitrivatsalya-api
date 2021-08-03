const { createInspire , getInspire , getInspireById , updateInspire , deleteInspire } = require("./inspire.service");

module.exports = {
    createInspire:(req,res)=>{
        const body=req.body;
        createInspire(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    data:results.affectedRows + " "+ "created Successfully!"
                })
            }
        })
    },

    getInspire:(req,res)=>{
        getInspire((err,results)=>{
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

    getInspireById:(req,res)=>{
        let id=req.params.id;
        getInspireById(id,(err,results)=>{
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

    updateInspire:(req,res)=>{
        const body=req.body;
        updateInspire(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database Connection Error"
                })
            }

            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:"Inspiration Updated Successfully!!"
                })
            }
        })
    },

    deleteInspire:(req,res)=>{
        let id=req.params.id;
        deleteInspire(id,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database Connection Error"
                })
            }

            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:"Inspiration Deleted Successfully"
                })
            }
        })
    },
}