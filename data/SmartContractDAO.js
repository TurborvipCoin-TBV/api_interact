require('dotenv').config();
const Web3 = require('web3');
const floppyAbi = require('../contracts/floppy.json');
const vaultAbi = require('../contracts/vault.json');

class SmartContractDAO {
    constructor(){
        this.web3 = new Web3(`https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`);
        this.token_address = process.env.TOKEN_ADDRESS;
        this.vault_address = process.env.VAULT_ADDRESS;
        this.withdrawer_private_key = process.env.WITHDRAWER_PRIVATE_KEY;
        this.withdrawer_address = process.env.WITHDRAWER_ADDRESS;
    }

    async withdraw(address,amount){
        await this.web3.eth.accounts.wallet.add(this.withdrawer_private_key);
        const vault_contract = await new this.web3.eth.Contract(vaultAbi,this.vault_address);

        // sender privatekey
        let value = await Web3.utils.toWei(amount.toString());
        let rs = await vault_contract.methods
                .withdraw(value,address)
                .send({
                    from: this.withdrawer_address,
                    gas: 3000000,
                });
        return rs.transactionHash;
    }
}

module.exports = SmartContractDAO;
