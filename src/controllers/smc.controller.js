'use strict';
const SmartContractDAO = require('../../data/SmartContractDAO');
const resCus = require('../helpers/responseCus.helper');

exports.withdraw = async function withdraw(req,res){
    try {
        // get the address, amount from request body
        let {address, amount} = req.body;

        if(!address || amount<=0){
            return res.status(400).json(resCus.APIReturn(101,"Bad request"));
        }

        console.log("call smart contract");

        // send token

        let dao = new SmartContractDAO();
        let trans = await dao.withdraw(address,amount);
        console.log(trans);

        return res.status(200).json(resCus.APIReturn(0,{
            "to": address,
            "amount" : amount,
            "txHash" : trans
        },"success"));
    } catch (error) {
        console.log(error);
        return res.status(500).json(resCus.APIReturn(101,"Something is wrong !"))
    }
}
