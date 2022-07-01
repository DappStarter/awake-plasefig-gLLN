require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture roast food ski strike curtain magic hole grid enroll slot general'; 
let testAccounts = [
"0x757f37c2494b9ff9c73a008ff786ac8a6c7cd32943226e3fdffb9163102b0f51",
"0x6accedddee32e3e62ebca5b4be7715d7dc796d52762a821fef76f37b4ae269a6",
"0xb2dda4093e216572031c6e218021bf1b4b2880d45d3c94f40e4cae87ab5a28a6",
"0x5594b6581ee6f986427fdcd82fcc9fa6f851d9a7f458e88a2195a23d7e1f3317",
"0x27f77581d3a378a4f849f796d00d37fee663ca88edb70b4050c1f928bb957599",
"0x75ad2b984bd5e656c655b1deca911def44cbffbeaea65f51b1ff4f75de809893",
"0x0c522e9d7cdb5c093c50d84244f0fc245819bffd213d90b1f5c3124826d04666",
"0x4b8c6eac43be7fa53e7fad855b6c9f00c61b4a9eb80b32122d01332a9c1665e4",
"0x21cf247abc825636eb3e564b4c135678d434b4eef6b03dec92f6b491b8e6faaa",
"0xac355137f944b957c92c9dd6ef105fe83da5f2d8ba4471c433ce3fcb5ddb24f8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


