const pool=require("../../config/db");
const DATE_FORMATER = require( 'dateformat' );

module.exports={
    getfolder:callBack=>{
        pool.query(
            'select * from folder',
            [],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                results.forEach(element => {
                    let cur= new Date(element.fcreated_date).toLocaleDateString('en-US', {timeZone: 'Asia/Calcutta'});
                    element.fcreated_date=DATE_FORMATER( cur, "yyyy-mm-dd" );	 
                 });
                return callBack(null,results);
            }
        )
    },
    getfolderbyid:(fid,callBack)=>{
        pool.query(
            'select fid,fname,fcreated_date from folder where fid=?',
            [
                fid
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                if(results.length != 0){
                    results.forEach(element => {
                        let cur= new Date(element.fcreated_date).toLocaleDateString('en-US', {timeZone: 'Asia/Calcutta'});
                        element.fcreated_date=DATE_FORMATER( cur, "yyyy-mm-dd" );	 
                     });
                }
                return callBack(null,results);
            }
        )
    },
    createfolder: (body,callBack)=>{
        var cur= new Date().toLocaleString('en-US', {timeZone: 'Asia/Calcutta'});
        var currentDate=DATE_FORMATER( cur, "yyyy-mm-dd" );
        pool.query(
            'INSERT into folder (fname,fcreated_date) values(?,?)',
            [
                body.fname,
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
    updatefolder:(body,callBack)=>{
        pool.query(
            'UPDATE folder SET fname=? WHERE fid=?',
            [
                body.fname,
                body.fid
            ],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    deletefolder:(fid,callBack)=>{
        pool.query(
            'DELETE from folder WHERE fid=?',
            [
                fid
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