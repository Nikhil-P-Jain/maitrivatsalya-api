const pool=require("../../config/db");
module.exports={
    getstory:callBack=>{
        pool.query(
            'SELECT * FROM story',
            [],
            (error,results)=>{
                //console.log(results);
                if(error){
                   //console.log(error);
                   return callBack(error); 
                }
                return callBack(null,results);
            }
        )
    },
    getstorybyid:(sid,callBack)=>{
        pool.query(
            'select sid,title,description,image from story where sid=?',
            [
                sid
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    createstory: (body,callBack)=>{
        pool.query(
            'INSERT into story (title,description,image) values(?,?,?)',
            [
                body.title,
                body.description,
                body.image
            ],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    updatestory:(body,callBack)=>{
        pool.query(
            'UPDATE story SET title=?,description=?,image=? WHERE sid=?',
            [
                body.title,
                body.description,
                body.image,
                body.sid
            ],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    deletestory:(sid,callBack)=>{
        pool.query(
            'DELETE from story WHERE sid=?',
            [
                sid
            ],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    }
}