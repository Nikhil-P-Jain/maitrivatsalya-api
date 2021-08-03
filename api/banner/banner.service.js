const pool = require("../../config/db");
const DATE_FORMATER = require( 'dateformat' );

module.exports = {
    createBanner:(data,callBack)=>{
        var cur= new Date().toLocaleString('en-US', {timeZone: 'Asia/Calcutta'});
        var currentDate=DATE_FORMATER( cur, "yyyy-mm-dd" );
        pool.query(
            `insert into banner(bname,blink,status,created_date) values(?,?,?,?)`,
            [
            data.bname,
            data.blink,
            data.status,
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

    getBanner:callBack=>{
        pool.query(
            `select bid,bname,blink,status,created_date from banner where status='1'`,
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

    getBannerById:(id,callBack)=>{
        pool.query(
            `select bid,bname,blink,status,created_date from banner where status='1' and bid=?`,
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

    updateBanner:(data,callBack)=>{
        pool.query(
            `update banner set bname=?,blink=?,status=? where bid=?`,
            [
                data.bname,
                data.blink,
                data.status,
                data.bid
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    delBanner:(data,callBack)=>{
        pool.query(
            `update banner set status=? where bid=?`,
            [
                data.status,
                data.bid
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                
                return callBack(null,results);
            }
        )
    },

    deleteBanner:(id,callBack)=>{
        pool.query(
            `delete from banner where bid=?`,
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