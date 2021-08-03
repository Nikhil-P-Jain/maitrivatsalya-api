const pool = require("../../config/db");
const DATE_FORMATER = require( 'dateformat' );

module.exports = {
    createCounter:(data,callBack)=>{
        var cur= new Date().toLocaleString('en-US', {timeZone: 'Asia/Calcutta'});
        var currentDate=DATE_FORMATER( cur, "yyyy-mm-dd" );
        pool.query(
            `insert into counter(cname,cvalue,created_date) values(?,?,?)`,
            [
            data.cname,
            data.cvalue,
            currentDate,
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    getCounter:callBack=>{
        pool.query(
            `select cid,cname,cvalue,created_date from counter`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                results.forEach(element => {
                    let cur= new Date(element.created_date).toLocaleDateString('en-US', {timeZone: 'Asia/Calcutta'});
                    element.created_date=DATE_FORMATER( cur, "yyyy-mm-dd" );	 
                 });
                return callBack(null,results);
            }
        )
    },

    getCounterById:(id,callBack)=>{
        pool.query(
            `select cid,cname,cvalue,created_date from counter where cid=?`,
            [
                id
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                if(results.length != 0){
                    results.forEach(element => {
                        let cur= new Date(element.created_date).toLocaleDateString('en-US', {timeZone: 'Asia/Calcutta'});
                        element.created_date=DATE_FORMATER( cur, "yyyy-mm-dd" );	 
                     });
                }
                return callBack(null,results);
            }
        )
    },

    updateCounter:(data,callBack)=>{
        pool.query(
            `update counter set cname=?,cvalue=? where cid=?`,
            [
                data.cname,
                data.cvalue,
                data.cid
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    deleteCounter:(id,callBack)=>{
        pool.query(
            `delete from counter where cid=?`,
            [
                id,
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    }
}