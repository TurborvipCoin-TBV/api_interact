module.exports.APIReturn = function (code = 0 , data = {} , mess = ""){
    if(code === 503){
        if(mess !== ""){
            mess = "Miss field"
        }
    }
    if(typeof data === 'string'){
        mess = data;
        data = {};
    }
    return {
        code,data,mess
    }
};