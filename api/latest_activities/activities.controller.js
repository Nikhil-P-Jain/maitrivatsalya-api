const { createActivity , getActivity , getActivityById , updateActivity , deleteActivity } = require("./activities.service");

module.exports = {
    createActivity:(req,res)=>{
        const body=req.body;
        createActivity(body,(err,results)=>{
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

    getActivity:(req,res)=>{
        getActivity((err,results)=>{
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

    getActivityById:(req,res)=>{
        let id=req.params.id;
        getActivityById(id,(err,results)=>{
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

    updateActivity:(req,res)=>{
        const body=req.body;
        updateActivity(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database Connection Error"
                })
            }

            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:"Latest Activities Updated Successfully!!"
                })
            }
        })
    },

    deleteActivity:(req,res)=>{
        let id=req.params.id;
        deleteActivity(id,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database Connection Error"
                })
            }

            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:"Letest Activities Deleted Successfully"
                })
            }
        })
    },
}