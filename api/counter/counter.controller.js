const { createCounter , getCounter , getCounterById , updateCounter , deleteCounter } = require("./counter.service");

module.exports = {
    createCounter:(req,res)=>{
        const body=req.body;
        createCounter(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                });
            }
            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    data:results.affectedRows + " "+ "Counter created Successfully!"
                })
            }
        })
    },

    getCounter:(req,res)=>{
        getCounter((err,results)=>{
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

    getCounterById:(req,res)=>{
        let id=req.params.id;
        getCounterById(id,(err,results)=>{
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

    updateCounter:(req,res)=>{
        const body=req.body;
        updateCounter(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database Connection Error"
                })
            }

            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:"Counter Updated Successfully!!"
                })
            }
        })
    },

    deleteCounter:(req,res)=>{
        let id=req.params.id;
        deleteCounter(id,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database Connection Error"
                })
            }

            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:"Counter Deleted Successfully"
                })
            }
        })
    },
}