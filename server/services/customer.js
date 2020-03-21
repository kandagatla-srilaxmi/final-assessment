var connection=require("../db/connect");

postMethod=async(data)=>{
    return new Promise((resolve,reject)=>{
        console.log(data);
        connection.query(`insert into customer values('${data.id}','${data.fName}','${data.lName}','${data.email}',
        '${data.gender}','${data.address}','${data.city}','${data.state}')`,(error,result)=>{
            if(!error){
                resolve(result);
            }
            else{
                reject(error);
            }
        });
    });
}
getMethod=async()=>{
    return new Promise((resolve,reject)=>{
        connection.query(`select * from customer`,(error,result)=>{
            if(!error){
                resolve(result);
            }
            else{
                reject(error);
            }
        });
    });
}


getById=async(id)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`select * from customer where id='${id}'`,(error,result)=>{
            if(!error){
                resolve(result);
            }
            else{
                reject(error);
            }
        });
    });
}

updateMethod=async(id,name,data)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`update customer set ${name}='${data}' where id='${id}'`,(error,result)=>{
            
            if(!error){
                resolve(result);
            }
            else{
                reject(error);
            }
        });
    });
}

deleteMethod=async(id)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`delete from customer where id='${id}'`,(error,result)=>{
            if(!error){
                resolve(result);
            }
            else{
                reject(error);
            }
        });
    });
}


module.exports.postMethod= postMethod;
module.exports.getMethod= getMethod;
module.exports.getById= getById;
module.exports.updateMethod= updateMethod;
module.exports.deleteMethod= deleteMethod;