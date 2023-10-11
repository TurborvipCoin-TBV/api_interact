'use strict';
const resCus = require('../helpers/responseCus.helper');

exports.test = async function(req,res){
    return res.status(200).json(resCus.APIReturn(200,"Server is running!"))
}       