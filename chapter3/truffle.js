// Allows us to use ES6 in our migrations and tests.
require('babel-register')

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "risk craft lounge final social gorilla level obvious bridge exact solar also float neglect uphold"

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // Match any network id
    },
ropsten: {
    provider: function() {
      return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/<tI0a3CvVzmPD66a9VoGx>")
    },
    network_id: 3,
    gas: 4700000
    }


  }
}
