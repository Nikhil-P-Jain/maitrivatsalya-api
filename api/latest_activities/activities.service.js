const pool = require("../../config/db");
const DATE_FORMATER = require( 'dateformat' );

module.exports = {
    createActivity:(data,callBack)=>{
        pool.query(
            `insert into activities(caption,heading,image,description) values(?,?,?,?)`,
            [
            data.caption,
            data.heading,
            data.image,
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

    getActivity:callBack=>{
        pool.query(
            `select lid,caption,heading,image,description from activities`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    getActivityById:(id,callBack)=>{
        pool.query(
            `select lid,caption,heading,image,description from activities where lid=?`,
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

    updateActivity:(data,callBack)=>{
        pool.query(
            `update activities set caption=?,heading=?,image=?,description=? where lid=?`,
            [
                data.caption,
                data.heading,
                data.image,
                data.description,
                data.lid
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    deleteActivity:(id,callBack)=>{
        pool.query(
            `delete from activities where lid=?`,
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