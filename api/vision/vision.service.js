const pool=require("../../config/db");
module.exports={
    getvision:callBack=>{
        pool.query(
            'select * from vision',
            [],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    getvisionbyid:(vid,callBack)=>{
        pool.query(
            'select vid,title,caption,image,description from vision where vid=?',
            [
                vid
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    createvision: (body,callBack)=>{
        pool.query(
            'INSERT into vision (title,caption,image,description) values(?,?,?,?)',
            [
                body.title,
                body.caption,
                body.image,
                body.description  
            ],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    updatevision:(body,callBack)=>{
        pool.query(
            'UPDATE vision SET title=?, caption=?, image=?, description=? WHERE vid=?',
            [
                body.title,
                body.caption,
                body.image,
                body.description,
                body.vid
            ],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    deletevision:(vid,callBack)=>{
        pool.query(
            'DELETE from vision WHERE vid=?',
            [
                vid
            ],
            (error,results)=>{
                if(error){
                    //console.log(error);
                    return callBack(error);
                }
                //console.log(results);
                return callBack(null,results);
            }
        )
    }
}