const pool=require("../../config/db");
const DATE_FORMATER = require( 'dateformat' );

module.exports={
    getsubfolder:callBack=>{
        pool.query(
            //'select * from subfolder',
            // 'select subfolder.sfname as sfname, folder.fid as fid, subfolder.sfimage as sfimage, sfcreated_date as sfcreated_date from subfolder JOIN folder ON folder.fid=subfolder.fid',
            'select subfolder.sfid, subfolder.sfname, subfolder.fid, folder.fname, subfolder.sfimage, subfolder.sfcreated_date from subfolder JOIN folder ON subfolder.fid=folder.fid',
            [],
            (error,results)=>{
                if(error){
                    // console.log(error);
                    return callBack(error);
                }
                results.forEach(element => {
                    let cur= new Date(element.sfcreated_date).toLocaleDateString('en-US', {timeZone: 'Asia/Calcutta'});
                    element.sfcreated_date=DATE_FORMATER( cur, "yyyy-mm-dd" );	 
                 });
                return callBack(null,results);
            }
        )
    },
    getsubfolderbyid:(sfid,callBack)=>{
        pool.query(
            'select sfid,sfname,fid,sfimage,sfcreated_date from subfolder where sfid=?',
            [
                sfid
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                results.forEach(element => {
                    let cur= new Date(element.sfcreated_date).toLocaleDateString('en-US', {timeZone: 'Asia/Calcutta'});
                    element.sfcreated_date=DATE_FORMATER( cur, "yyyy-mm-dd" );	 
                 });
                return callBack(null,results);
            }
        )
    },
    getsubfolderbyfid:(fid,callBack)=>{
        pool.query(
            'select sfid,sfname,fid,sfimage,sfcreated_date from subfolder where fid=?',
            [
                fid
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                results.forEach(element => {
                    let cur= new Date(element.sfcreated_date).toLocaleDateString('en-US', {timeZone: 'Asia/Calcutta'});
                    element.sfcreated_date=DATE_FORMATER( cur, "yyyy-mm-dd" );	 
                 });
                return callBack(null,results);
            }
        )
    },
    createsubfolder: (body,callBack)=>{
        var cur= new Date().toLocaleString('en-US', {timeZone: 'Asia/Calcutta'});
        var currentDate=DATE_FORMATER( cur, "yyyy-mm-dd" );
        pool.query(
            'INSERT into subfolder (sfname,fid,sfimage,sfcreated_date) values(?,?,?,?)',
            [
                body.sfname,
                body.fid,
                body.sfimage,
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
    updatesubfolder:(body,callBack)=>{
        pool.query(
            'UPDATE subfolder SET sfname=?,fid=?,sfimage=? WHERE sfid=?',
            [
                body.sfname,
                body.fid,
                body.sfimage,
                body.sfid
            ],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    deletesubfolder:(sfid,callBack)=>{
        pool.query(
            'DELETE from subfolder WHERE sfid=?',
            [
                sfid
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