require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success stomach decrease stick minor inner private slot genre'; 
let testAccounts = [
"0x792dfcec8994626943aed1f4d3216018d84ded7ae485c627454dd410080b94c5",
"0x8d42a1a6f45af1b7558228fc446e2b2495421eaf8b9954d055c159451feb2b0a",
"0x2a1dbe86f9289a54aa4af20f332430d0d9efedf2a02a150a6ac9dd99725d5131",
"0x254c2866590d3f63b1e1955910ef472e21b2d15aadc492dea264e890665b27d9",
"0x6cb39e4bef3120080922edf18439330949c70d384a696bb6a5b724da7cae2fe3",
"0x1db9562dcadf0479904105bc27084e864c1670d6f2323492a32c3a4dc85d088f",
"0x39282ec19c5731ad2d8032390ca623c5793bb89e0191d2c582eefd420fb7b3f1",
"0x628bcd1ae830ea52c66bbc1a2f621a994aa04eea0a02beca1264e9ccad11e609",
"0xe0aa547482861fe9db973b29f2d5ce935f3458ad4076cfc60238b812c900fb8f",
"0x147bf5daeee5080bf7ba998d1fa7b20b1bc873eb51637124c1398f73c590fa2d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

