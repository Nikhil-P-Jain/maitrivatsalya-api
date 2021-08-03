const pool = require("../../config/db");

module.exports = {
    createAbout:(data,callBack)=>{
        pool.query(
            `insert into aboutus(name,designation,recomm) values(?,?,?)`,
            [
            data.name,
            data.designation,
            data.recomm,
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    getAbout:callBack=>{
        pool.query(
            `select aid,name,designation,recomm from aboutus`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    getAboutById:(id,callBack)=>{
        pool.query(
            `select aid,name,designation,recomm from aboutus where aid=?`,
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

    updateAbout:(data,callBack)=>{
        pool.query(
            `update aboutus set name=?,designation=?,recomm=? where aid=?`,
            [
                data.name,
                data.designation,
                data.recomm,
                data.aid
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    deleteAbout:(id,callBack)=>{
        pool.query(
            `delete from aboutus where aid=?`,
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