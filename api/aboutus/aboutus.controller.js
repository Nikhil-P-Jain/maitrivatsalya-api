const { createAbout , getAbout , getAboutById , updateAbout , deleteAbout } = require("./aboutus.service");

module.exports = {
    createAbout:(req,res)=>{
        const body=req.body;
        createAbout(body,(err,results)=>{
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

    getAbout:(req,res)=>{
        getAbout((err,results)=>{
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

    getAboutById:(req,res)=>{
        let id=req.params.id;
        getAboutById(id,(err,results)=>{
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

    updateAbout:(req,res)=>{
        const body=req.body;
        updateAbout(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database Connection Error"
                })
            }

            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:"Testimonials Updated Successfully!!"
                })
            }
        })
    },

    deleteAbout:(req,res)=>{
        let id=req.params.id;
        deleteAbout(id,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database Connection Error"
                })
            }

            if(results.affectedRows != 0){
                return res.status(200).json({
                    success:1,
                    message:"AboutUs Deleted Successfully"
                })
            }
        })
    },
}