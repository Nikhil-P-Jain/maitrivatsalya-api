const pool=require("../../config/db");
const DATE_FORMATTER = require( 'dateformat' );

module.exports={
    getvideos:callBack=>{
        pool.query(
            'select * from videos',
            [],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                results.forEach(element => {
                    let cur= new Date(element.created_date).toLocaleDateString('en-US', {timeZone: 'Asia/Calcutta'});
                    element.created_date=DATE_FORMATTER( cur, "yyyy-mm-dd" );	 
                 });
                return callBack(null,results);
            }
        )
    },
    getvideosbyid:(vid,callBack)=>{
        pool.query(
            'select vid,title,thumbnail,vlink,description,created_date from videos where vid=?',
            [
                vid
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                results.forEach(element => {
                    let cur= new Date(element.created_date).toLocaleDateString('en-US', {timeZone: 'Asia/Calcutta'});
                    element.created_date=DATE_FORMATTER( cur, "yyyy-mm-dd" );	 
                 });
                return callBack(null,results);
            }
        )
    },
    createvideos: (body,callBack)=>{
        var cur= new Date().toLocaleString('en-US', {timeZone: 'Asia/Calcutta'});
        var currentDate=DATE_FORMATTER( cur, "yyyy-mm-dd" );
        pool.query(
            'INSERT into videos (title,thumbnail,vlink,description,created_date) values(?,?,?,?,?)',
            [
                body.title,
                body.thumbnail,
                body.vlink,
                body.description,
                currentDate  
            ],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    updatevideos:(body,callBack)=>{
        pool.query(
            'UPDATE videos SET title=?, thumbnail=?, vlink=?, description=? WHERE vid=?',
            [
                body.title,
                body.thumbnail,
                body.vlink,
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
    deletevideos:(vid,callBack)=>{
        pool.query(
            'DELETE from videos WHERE vid=?',
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