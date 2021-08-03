const pool=require("../../config/db");
const DATE_FORMATTER = require( 'dateformat' );

module.exports={
    getbook:callBack=>{
        pool.query(
            'select * from book',
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
    getbookbyid:(bid,callBack)=>{
        pool.query(
            'select bid,title,caption,description,image,blink,created_date from book where bid=?',
            [
                bid
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
    createbook: (body,callBack)=>{
        var cur= new Date().toLocaleString('en-US', {timeZone: 'Asia/Calcutta'});
        var currentDate=DATE_FORMATTER( cur, "yyyy-mm-dd" );
        pool.query(
            'INSERT into book (title,caption,description,image,blink,created_date) values(?,?,?,?,?,?)',
            [
                body.title,
                body.caption,
                body.description,
                body.image,
                body.blink,
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
    updatebook:(body,callBack)=>{
        pool.query(
            'UPDATE book SET title=?,caption=?,description=?,image=?,blink=? WHERE bid=?',
            [
                body.title,
                body.caption,
                body.description,
                body.image,
                body.blink,
                body.bid
            ],
            (error,results)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    deletebook:(bid,callBack)=>{
        pool.query(
            'DELETE from book WHERE bid=?',
            [
                bid
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