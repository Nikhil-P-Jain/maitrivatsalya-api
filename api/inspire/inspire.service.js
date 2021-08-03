const pool = require("../../config/db");
const DATE_FORMATER = require( 'dateformat' );

module.exports = {
    createInspire:(data,callBack)=>{
        pool.query(
            `insert into inspire(image,name,description) values(?,?,?)`,
            [
            data.image,
            data.name,
            data.description,
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    getInspire:callBack=>{
        pool.query(
            `select ino,image,name,description from inspire`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    getInspireById:(id,callBack)=>{
        pool.query(
            `select ino,image,name,description from inspire where ino=?`,
            [
                id
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    updateInspire:(data,callBack)=>{
        pool.query(
            `update inspire set image=?,name=?,description=? where ino=?`,
            [
                data.image,
                data.name,
                data.description,
                data.ino
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    deleteInspire:(id,callBack)=>{
        pool.query(
            `delete from inspire where ino=?`,
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